import { ADD_MOVIE_WATCHLIST, REMOVE_MOVIE_WATCHLIST } from "./constants"

export const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
}

function reducer(state, action){
    switch(action.type){
        case ADD_MOVIE_WATCHLIST:
            return{
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        case REMOVE_MOVIE_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
            default:

            throw new Error('Invalid action')
    }
}

export default reducer