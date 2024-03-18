import { useContext } from 'react';
import StartGame from './components/StartGame';
import Context from './context/myContext';
import Game from './components/Game';
import Finished from './components/Finished';
import InstructionsMainPage from './components/InstructionsMainPage';

function App() {

  const {isStarted, isFinished, isInstructions} = useContext(Context)

  return (
    <div>
      {!isStarted && !isInstructions && <StartGame />}
      {isStarted && !isFinished && <Game />}
      {isFinished && <Finished />}
      {isInstructions && <InstructionsMainPage />}
    </div>
  );
}

export default App;
