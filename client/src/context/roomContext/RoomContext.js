import React, { useEffect, useReducer, createContext } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';

const roomContext = createContext(initialState);

const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useActions(state, dispatch);

  useEffect(() => {console.log({ newState: state })}, [state]);

  return (
    <roomContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </roomContext.Provider>
  )
};

export { roomContext, RoomProvider };