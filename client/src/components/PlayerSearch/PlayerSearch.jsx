import React, { useContext, useState } from "react";
import { userContext } from "../../context/userContext/UserContext";

export default function PlayerSearch() {
  const { state, actions } = useContext(userContext);
  const { name } = state;
  const [playerName, setPlayerName] = useState(name);

  function handleSearch(e) {
    e.preventDefault();
    actions.searchPlayer(playerName);
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
    </div>
  );
}
