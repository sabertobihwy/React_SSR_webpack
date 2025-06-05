import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { hydrateRoot } from 'react-dom/client';
import React from 'react'
import { createReduxStore, rootReducer } from './store'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const router = createBrowserRouter(routes);
const queryClient = new QueryClient()
const preloadedState = window.__PRELOADED_STATE__
const clientStore = createReduxStore(preloadedState)

//console.log(window)

hydrateRoot(document.getElementById('root'),
    <Provider store={clientStore} serverState={preloadedState}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </Provider>);
