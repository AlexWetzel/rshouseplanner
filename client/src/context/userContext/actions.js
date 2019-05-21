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
        const name = res.data.playerData.name;

        if(typeof(Storage) !== "undefined"){
          localStorage.setItem("name", name);
        }
        
        dispatch({ type: types.setPlayer, payload: name })
    })
  }

  return {
    useStoredData,
    searchPlayer
  };
}