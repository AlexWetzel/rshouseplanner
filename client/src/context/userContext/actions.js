import { types } from './reducers';
import axios from 'axios';


export const useActions = (state, dispatch) => {
  function searchPlayer() {
    axios
      .get("/api/player", { params: {name: "uber Guy"} })
      .then(res => {
        console.log(res);
        const player = res.data.playerData;

        if(typeof(Storage) !== "undefined"){
          const { name } = player
          localStorage.setItem("name", name);
        }
        console.log(player)
        dispatch({ type: types.setPlayer, payload: player })
    })
  }

  return {
    searchPlayer
  };
}