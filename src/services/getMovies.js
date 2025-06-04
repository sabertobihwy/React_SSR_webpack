import { fetchJSON } from "./request"


export async function getMovies(page = 1, limit = 10) {
    const resp = await fetchJSON(`/api/movies?page=${page}&limit=${limit}`)
    return resp
}