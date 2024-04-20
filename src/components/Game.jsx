import React, { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';



export default function Game({
  computerDeck,
  playerDeck,
  computerPoints,
  playerPoints,
  setPageFlag,
  setPlayerPoints,
  setComputerPoints,
  player,
  setPlayer,
}) {
  const [index, setIndex] = useState(0);

  function compareValues() {
    if (computerDeck[index] > playerDeck[index]) {
      setComputerPoints((prevState) => prevState + 1); // גישה לסטייט הקודם
    } else if (computerDeck[index] < playerDeck[index]) {
      setPlayerPoints(playerPoints + 1);
    }
    setIndex(index + 1);
    if (index === 25) {
      let updatedPlayer = { ...player };
      //   let clonedPlayer = structuredClone(player)
      if (computerPoints > playerPoints) {
        updatedPlayer.lost++;
      } else if (playerPoints > computerPoints) {
        updatedPlayer.wins++;
      }

      setPlayer(updatedPlayer);
      setPageFlag(2);
    }
  }



  return (
    <div>
      <h1 id="computerTitle">Computer <br/><span id="score">Score: {computerPoints}</span></h1>
      <Card cardValue={computerDeck[index]} color={'red'}/>
      <div className="flex">
        <button id="round">N.O - {index}</button> 
        <button id="next" onClick={compareValues}>Next <FontAwesomeIcon icon={faShieldHalved} /></button>
      </div>
      
      <Card cardValue={playerDeck[index]}  color={'green'}/>
      <h1 id="playerTitle">{player.fullName}  <br/><span id="score">Score: {playerPoints}</span></h1>
    </div>
  );
}
