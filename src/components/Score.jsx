import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Score({ 
    computerPoints,
    playerPoints,
    player,
    tryAgain,
    exit,
}) {

    function checkWinner(){
        if(playerPoints>computerPoints){
            return <h2>You Win!</h2>
        }else if(playerPoints<computerPoints){
            return <h2>You Lose!</h2>
        }else{
            return <h2>It's a Tie!</h2>
        }
    }

  return (
    <div>
        <button id='exit' onClick={exit}><FontAwesomeIcon icon={faXmark} /></button>
        {checkWinner()}
        <h2>Win: {player.wins} / Lose: {player.lost}</h2>
        <button onClick={tryAgain}>Try Again?</button>
    </div>
  )
}
