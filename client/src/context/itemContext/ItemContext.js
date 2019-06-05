import React, { useEffect, useReducer, createContext } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';

const itemContext = createContext(initialState);

const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useActions(state, dispatch);

  useEffect(() => {console.log({ newState: state })}, [state]);

  return (
    <itemContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </itemContext.Provider>
  )
};

export { itemContext, ItemProvider };