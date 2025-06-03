import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { hydrateRoot } from 'react-dom/client';
import React from 'react'
import { createReduxStore, rootReducer } from './store'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const router = createBrowserRouter(routes);

const preloadedState = window.__PRELOADED_STATE__
const clientStore = createReduxStore(preloadedState)

console.log(window)

hydrateRoot(document.getElementById('root'),
    <Provider store={clientStore} serverState={preloadedState}>
        <RouterProvider router={router} />
    </Provider>);
