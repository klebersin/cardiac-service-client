import { createContext } from 'react';

const initialState = {
    users: []
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({children})=>{

    return (
        <GlobalContext.Provider value={initialState}>
            {children}
        </GlobalContext.Provider>
    )
}