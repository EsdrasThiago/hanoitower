import { useContext } from 'react';
import StartGame from './components/StartGame';
import Context from './context/myContext';
import Game from './components/Game';
import InstructionsMainPage from './components/InstructionsMainPage';

function App() {

  const {isStarted, isInstructions} = useContext(Context)

  return (
    <div>
      {!isStarted && !isInstructions && <StartGame />}
      {isStarted && <Game />}
      {isInstructions && !isStarted && <InstructionsMainPage />}
    </div>
  );
}

export default App;
