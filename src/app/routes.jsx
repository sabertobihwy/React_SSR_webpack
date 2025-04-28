import Home from '../pages/front/home';
import React from 'react'
import Front from '../pages/front';
import Admin from '../pages/admin';
import User from '../pages/admin/user';
import Sys from '../pages/admin/sys';
import { headerAdmin, headerFront } from '../components/headers/headerData'
import { json, useLoaderData } from 'react-router-dom'
import Movies from '../pages/front/movies';


export const routes = [
    {
        path: '/',
        id: 'root',
        element: <Front headers={headerFront} />,
        loader() {
            return json({ message: "root loader" });
        },
        children: [
            {
                index: true,
                loader() {
                    return json({ home: "Home loader" });
                },
                element: <Home />,
            },
            {
                path: 'movies',
                loader() {
                    return json({ movies: "movies loader" });
                },
                element: <Movies />,
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin headers={headerAdmin} />,
        children: [
            {
                index: true,
                element: <User />,
            },
            {
                path: 'user',
                element: <User />,
            },
            {
                path: 'sys',
                element: <Sys />,
            }
        ]
    }
];