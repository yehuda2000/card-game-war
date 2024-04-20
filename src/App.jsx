import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import Score from "./components/Score";
import ScoreTable from "./components/ScoreTable";

function App() {
  const [player, setPlayer] = useState({});
  const [playerDeck, setPlayerDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [pageFlag, setPageFlag] = useState(0);
  const [listWinners,setListWinners] = useState([]);

  function tryAgain(){
    setComputerPoints(0)
    setPlayerPoints(0)
    setPageFlag(1)
    createDeck()
  }

  function goBack(){
    setPageFlag(0);
  }

  function showScoreTable(){
    setPageFlag(3);
  }
    function exit() {
      const existingPlayerIndex = listWinners.findIndex((p) => p.fullName === player.fullName);
    
      if (existingPlayerIndex !== -1) {
        let clonedListWinners = listWinners.slice();
        clonedListWinners.splice(existingPlayerIndex, 1, player);
        setListWinners(clonedListWinners);
      } else {
        setListWinners((prevListWinners) => [...prevListWinners, player]);
      }
    
    setComputerPoints(0)
    setPlayerPoints(0)
    setPageFlag(0)
  }

  function validName(name) {
    if (name.length > 1) {
      const existingPlayer = listWinners.find(player=>player.fullName === name)
      if(existingPlayer!=undefined){
        setPlayer({ fullName: name, wins: existingPlayer.wins, lost:  existingPlayer.lost });
      }else{
        setPlayer({ fullName: name, wins: 0, lost: 0 });
      }
      createDeck();
      setPageFlag(1);
    }else{
      alert('Please type a valid name')
    }
  }

  function createDeck() {
    let cardDeck = [];
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j < 4; j++) {
        cardDeck.push(i);
      }
    }

    let rndIndex;
    let compDeck = [];
    let playDeck = [];
    for (let i = 0; i < 26; i++) {
      rndIndex = Math.floor(Math.random() * cardDeck.length);
      playDeck.push(cardDeck[rndIndex]);
      cardDeck.splice(rndIndex, 1);

      rndIndex = Math.floor(Math.random() * cardDeck.length);
      compDeck.push(cardDeck[rndIndex]);
      cardDeck.splice(rndIndex, 1);
    }

    setComputerDeck([...compDeck]);
    setPlayerDeck([...playDeck]);
  }

  function showPages() {
    // switch(pageFlag){
    //   case 0:
    //     return <Home/>
    //   case 1:
    //     return <Game/>
    //   case 2:
    //     return <Score/>
    // }

    if (pageFlag === 0) {
      return <Home validName={validName} showScoreTable={showScoreTable} />;
    }
    if (pageFlag === 1) {
      return (
        <Game
          computerDeck={computerDeck}
          playerDeck={playerDeck}
          computerPoints={computerPoints}
          setComputerPoints={setComputerPoints}
          playerPoints={playerPoints}
          setPlayerPoints={setPlayerPoints}
          setPageFlag={setPageFlag}
          player={player}
          setPlayer={setPlayer}

        />
      );
    }
    if (pageFlag === 2) {
      return <Score 
      computerPoints={computerPoints}
      playerPoints={playerPoints}
      player={player}
      tryAgain={tryAgain}
      exit={exit}
      />;
    }
    if (pageFlag === 3) {
      return <ScoreTable 
      listWinners={listWinners}
      goBack={goBack}
      />;
    }
  }

  return <div>{showPages()}</div>;
}

export default App;