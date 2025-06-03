import { renderToString } from 'react-dom/server';
import {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
} from 'react-router-dom/server.mjs';
import { routes } from '../app/routes';
import React from 'react'
import { getScript } from './getScript'
import { getLink } from './getLink'
import { getHTML } from './getHTML';
import { createFetchRequest } from './request';
import { Provider } from 'react-redux'
import { createReduxStore } from '../app/store.js';

// 在server端我做的事有。请求 -> 根据router匹配到组件 -> 顺序执行loader -> 注入context再注入provider -> 组成html序列化
export default async (req, res) => {
    const store = createReduxStore()
    const { query, dataRoutes } = createStaticHandler(routes); // 不自动触发 loader，必须显式执行 query(request)

    const request = createFetchRequest(req, res)

    const context = await query(request);
    // 请求 -> 匹配路由，按顺序执行loader（和数据库交互）拿到初始化数据； 
    // 负责记录 loader 返回内容，以及是否 redirect / 404 等

    const router = createStaticRouter(dataRoutes, context); // 负责页面应该怎么渲染（匹配哪个组件、用哪个 loader 数据）

    const AppRouterStr = renderToString(
        <Provider store={store}>
            <StaticRouterProvider router={router} context={context} />
        </Provider>
    );
    const preloadedState = store.getState()

    const html = getHTML(getLink, getScript, AppRouterStr, preloadedState)

    res.send(html)
}