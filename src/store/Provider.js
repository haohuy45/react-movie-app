import React, {useEffect, useReducer} from 'react'
import Context from './Context'
import reducer, {initialState}  from './reducer'

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider
