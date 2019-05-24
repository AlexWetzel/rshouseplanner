import { types } from './reducers';
import axios from 'axios';


export const useActions = (state, dispatch) => {
  function useStoredData() {
    const name = localStorage.getItem("name");
    dispatch({ type: types.setPlayer, payload: name })
  }

  function searchPlayer() {
    axios
      .post("/api/player", {name: "uber Guy"})
      .then(res => {
        console.log(res);
        const player = res.data.playerData;

        if(typeof(Storage) !== "undefined"){
          const { name } = player
          localStorage.setItem("name", name);
        }
        console.log(player)
        dispatch({ type: types.setPlayerName, payload: player })
    })
  }

  return {
    useStoredData,
    searchPlayer
  };
}