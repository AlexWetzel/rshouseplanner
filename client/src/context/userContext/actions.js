import { types } from './reducers';
import axios from 'axios';


export const useActions = (state, dispatch) => {
  function searchPlayer(name) {
    axios
      .get("/api/player", { params: { name } })
      .then(res => {
        console.log(res);
        const player = res.data.playerData;

        if(typeof(Storage) !== "undefined"){
          const { name } = player
          localStorage.setItem("name", name);
        }
        dispatch({ type: types.setPlayer, payload: player })
    })
  }

  return {
    searchPlayer
  };
}