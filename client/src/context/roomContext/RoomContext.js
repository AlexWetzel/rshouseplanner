import React, { useEffect, useContext, useReducer, createContext } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';
import { itemContext } from "../itemContext/ItemContext";

const roomContext = createContext(initialState);



const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { state: itemState } = useContext(itemContext);
  const actions = useActions(state, itemState, dispatch);

  useEffect(() => {console.log({ newState: state })}, [state]);

  return (
    <roomContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </roomContext.Provider>
  )
};

export { roomContext, RoomProvider };