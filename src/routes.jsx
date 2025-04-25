import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import React from 'react'

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/movies',
        element: <Movies />,
    },
];