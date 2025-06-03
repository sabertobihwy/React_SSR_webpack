import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from '../features/counter/counterSlice.js'
import { movieReducer } from '../features/movies/movieSlice'

export const rootReducer = combineReducers({
    counter: counterReducer,
    movie: movieReducer
})

export function createReduxStore(preloadedState) {
    return configureStore({ reducer: rootReducer, preloadedState })
}