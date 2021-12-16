import { ADD_MOVIE_WATCHLIST, REMOVE_MOVIE_WATCHLIST } from "./constants"

export const addMovieWatchList = movie => ({
    type: ADD_MOVIE_WATCHLIST,
    payload: movie
})

export const removeMovieWatchList = id => ({
    type: REMOVE_MOVIE_WATCHLIST,
    payload: id
})