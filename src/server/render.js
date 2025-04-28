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
import { createFetchRequest } from './request';
import { json, useLoaderData } from 'react-router-dom'

export default async (req, res) => {
    const { query, dataRoutes } = createStaticHandler(routes);

    const request = createFetchRequest(req, res)

    const context = await query(request);

    const router = createStaticRouter(dataRoutes, context);

    const AppRouterStr = renderToString(
        <StaticRouterProvider router={router} context={context} />);

    const html = getHTML(getLink, getScript, AppRouterStr)

    res.send(html)
}