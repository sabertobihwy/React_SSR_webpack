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
import store from '../app/store.js';


export default async (req, res) => {
    const { query, dataRoutes } = createStaticHandler(routes);

    const request = createFetchRequest(req, res)

    const context = await query(request);

    const router = createStaticRouter(dataRoutes, context);

    const AppRouterStr = renderToString(
        <Provider store={store}>
            <StaticRouterProvider router={router} context={context} />
        </Provider>
    );
    const preloadedState = store.getState()

    const html = getHTML(getLink, getScript, AppRouterStr, preloadedState)

    res.send(html)
}