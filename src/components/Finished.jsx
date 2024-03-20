import { useContext } from 'react';
import '../styles/FinishedPageStyle.css'
import Context from '../context/myContext';

function Finished() {

  const { onClickNextDifficulty } = useContext(Context)

    return (
    <div className="finished-main">        
      <h1>Parabéns!</h1>
      <h2>Você venceu o jogo, que tal tentar uma dificuldade diferente?</h2>
      <button type="button" onClick={onClickNextDifficulty}>Voltar ao Menu</button>
    </div>
    );
  }
  
  export default Finished;