import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movies',
    initialState: { page: 1, limit: 10 },
    reducers: {
        changePage(state, action) {
            state.page = action.payload
        }
    }
})

export const { changePage } = movieSlice.actions
export const movieReducer = movieSlice.reducer