import React, {createContext, useContext, useReducer} from "react";

// Prepare the DataLayer
export const StateContext = createContext();

// Wrap our app and provide the DataLayer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the DataLayer
export const useStateValue = () => useContext(StateContext);