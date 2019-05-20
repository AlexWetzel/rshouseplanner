import { types } from './reducers';
import axios from 'axios';


export const useActions = (state, dispatch) => {
  function searchPlayer() {
    axios
      .post("/api/player", {name: "uber Guy"})
      .then(res => {
        console.log(res);
        const name = res.data.playerData.name;
        dispatch({ type: types.searchPlayer, payload: name})
    })
  }

  return {
    searchPlayer
  };
}