import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
import contactsInitialState from './initialsStates/contactsInitialState';
import authInititalState from './initialsStates/authInititalState';

export const GlobalContext = createContext({})

const GlobalProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(auth, authInititalState)
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState)

    return(
        <GlobalContext.Provider value={{authState, contactsState, authDispatch, contactsDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;