import { useContext, useState } from "react";
import instructions from "../mocks/instructionsMock";
import Context from "../context/myContext";
import '../styles/InstructionsPageStyle.css'
import clickSound from "../audios/click.mp3"

function InstructionsMainPage() {

  const [page, setPage] = useState(0);

  const { onClickStart, setIsInstructions, setClicked } = useContext(Context);

  const onClickNextPage = () => {
    const sound = new Audio(clickSound)
    sound.play()
    setClicked(false)
    setClicked(true)
    setPage(page+1)
  }

  const onClickLastPage = () => {
    const sound = new Audio(clickSound)
    sound.play()
    setClicked(false)
    setClicked(true)
    setPage(page-1)
  }

  const onClickReturnHome = () => {
    const sound = new Audio(clickSound)
    sound.play()
    setClicked(false)
    setClicked(true)
    setIsInstructions(false)
  }

    return (
      <div className="instruction-main">
        <h1 className="instruction-title">{instructions[page].title}</h1>
        <img className="instruction-gif" draggable={false} src={instructions[page].gif} alt={`gif ${instructions[page].title}`} />
        <p className="instruction-text">{instructions[page].text}</p>
        {instructions[page].button && <button type="button" className="instruction-start-button instruction-right-button" onClick={ onClickStart }>Jogar</button>}
        {page === 0 && <button type="button" className="instruction-left-button" onClick={onClickReturnHome}>Página Inicial</button>}
        {page !== 0 && <button type="button" className="instruction-left-button" onClick={onClickLastPage}>Página Anterior</button>}
        {page !== 4 && <button type="button" className="instruction-right-button" onClick={onClickNextPage}>Proxima Página</button>}
        <div className="instruction-background-image" />
      </div>
    );
  }
  
  export default InstructionsMainPage;