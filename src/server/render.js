import { renderToString } from 'react-dom/server';
import {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
} from 'react-router-dom/server.mjs';
import { routes } from '@/routes';
import React from 'react'
import { getScript } from './getScript'
import { getLink } from './getLink'
import { getHTML } from './getHTML';

export default async (req, res) => {
    const { query, dataRoutes } = createStaticHandler(routes);

    const context = await query(new Request(`http://localhost:8080${req.url}`));

    const router = createStaticRouter(dataRoutes, context);

    const AppRouterStr = renderToString(
        <StaticRouterProvider router={router} context={context} />);

    const html = getHTML(getLink, getScript, AppRouterStr)

    res.send(html)
}