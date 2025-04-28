import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { hydrateRoot } from 'react-dom/client';
import React from 'react'

const router = createBrowserRouter(routes);

hydrateRoot(document.getElementById('root'), <RouterProvider router={router} />);
