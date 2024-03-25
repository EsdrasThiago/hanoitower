import { useContext, useEffect } from 'react';
import StartGame from './components/StartGame';
import Context from './context/myContext';
import Game from './components/Game';
import InstructionsMainPage from './components/InstructionsMainPage';
import clickSound from './audios/click.mp3'
import gameMusic from './audios/hanoimusic.m4a'
import tutorialMusic from './audios/tutorialmusic.m4a'

function App() {

  const {isStarted, isInstructions, clicked} = useContext(Context)

  // useEffect(() => {
  //   if (clicked) {
  //     const clickAudio = document.getElementById('click')
  //     clickAudio.currentTime = null
  //     clickAudio.play()
  //   }
  // },[clicked])

  useEffect(() => {
    if (isStarted) {
      const gameAudio = document.getElementById('hanoimusic')
      gameAudio.volume = "0.02"
    }
    if (isInstructions && !isStarted) {
      const tutorialAudio = document.getElementById('tutorialmusic')
      tutorialAudio.volume = "0.02"
    }
  }, [isStarted, isInstructions])

  return (
    <div id='main-page'>
      {isStarted && <audio src={gameMusic} id='hanoimusic' autoPlay={true} type="audio/mpeg" />}
      {isInstructions && !isStarted && <audio src={tutorialMusic} id='tutorialmusic' autoPlay={true} type="audio/mpeg"/>}
      {/* {clicked && <audio src={clickSound} id='click' autoPlay={true} type="audio/mpeg"/>} */}
      {!isStarted && !isInstructions && <StartGame />}
      {isStarted && <Game />}
      {isInstructions && !isStarted && <InstructionsMainPage />}
    </div>
  );
}

export default App;
