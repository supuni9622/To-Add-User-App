import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    users: [
        {id: 1, name: 'Supuni'},
        {id: 2, name: 'Nipuni'},
        {id:3, name: 'Sachini'}
    ]
}

// Craete Context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({children}) => {
     const [state, dispatch] = useReducer(AppReducer, initialState)

     return(
         <GlobalContext.Provider value={{users: state.users}}>
             {children}
         </GlobalContext.Provider>
     )
}