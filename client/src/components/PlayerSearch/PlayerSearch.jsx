import React, { useContext, useState } from "react";
import { userContext } from "../../context/userContext/UserContext";
import axios from "axios";

export default function PlayerSearch() {
  const { state, actions } = useContext(userContext);
  const { name } = state;
  const [playerName, setPlayerName] = useState(name);

  const [item, setItem] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    actions.searchPlayer(playerName);
  }

  function itemSearch(e) {
    e.preventDefault();

    // const ite = e.target.value
    console.log(item);
    // console.log()
    axios.get("/api/oneitem", { params: { item }}).then(res => {
      if (res.data.item) {
        console.log(item);

      }
      else {
        console.log("Not found");
      }
    });
  }
  return (
    <div>
      <h3>{name}</h3>
      <form onSubmit={e => handleSearch(e)}>
        <input
          type="text"
          name="playerName"
          value={playerName}
          onChange={e => {
            setPlayerName(e.target.value);
          }}
        />
        <input type="submit" />
      </form>

      <h3>Item search</h3>
      <form onSubmit={e => itemSearch(e)}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={e => {
            setItem(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
