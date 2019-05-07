import * as types from '../types/types';

export const test = () => dispatch => {
  return dispatch({ type: types.TEST })
}