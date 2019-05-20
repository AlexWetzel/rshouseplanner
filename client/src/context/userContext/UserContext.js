import React, { useEffect, useReducer, createContext } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';

const userContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useActions(state, dispatch);

  useEffect(() => {console.log({ newState: state })}, [state]);

  return (
    <userContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </userContext.Provider>
  )
};

export { userContext, UserProvider };