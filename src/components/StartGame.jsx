import { useContext, useState } from 'react';
import Context from '../context/myContext';
import '../styles/InitialPageStyle.css'

function StartGame() {

  const { selectDifficulty, onClickStart, onClickInstructions } = useContext(Context)

  return (
    <div className='home-main'>
      <label htmlFor="difficulty-select" className="difficulty-title">Escolha uma dificuldade:</label>
      <select name="difficulty" onChange={selectDifficulty} id='difficulty-select' className="difficulty-select">
        <option value="easy">Fácil</option>
        <option value="normal">Normal</option>
        <option value="hard">Dificil</option>
      </select>
      <button type='button' onClick={onClickStart} className='difficulty-start-button'>Começar jogo</button>
      <button type='button'onClick={onClickInstructions}  className='how-to-play-button'>Como jogar?</button>
    </div>
  );
}

export default StartGame;
