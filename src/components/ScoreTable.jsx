import React from 'react'
import Winner from './Winner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function ScoreTable({listWinners,goBack}) {

    const sortedWinners = listWinners.sort((a, b) => b.wins - a.wins);

  return (
    <div>
        <button id='goBack' onClick={goBack}><FontAwesomeIcon icon={faRightFromBracket} /></button>
        <h1>Score Table</h1>
        <table>
            <tr>
                <td>Players</td>
                <td>Wins</td>
                <td>Losts</td>
            </tr>
        {sortedWinners.map((value, index) => {
        return (
          <Winner
            key={index}
            fullName={value.fullName}
            wins={value.wins}
            lost={value.lost}
            index={index}
          />
        );
      })}
        </table>
    </div>
  )
}
