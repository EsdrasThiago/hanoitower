import { useContext, useState } from "react";
import instructions from "../mocks/instructionsMock";
import Context from "../context/myContext";

function InstructionsMainPage() {

  const [page, setPage] = useState(0);

  const { onClickStart } = useContext(Context);

  const onClickNextPage = () => {
    setPage(page+1)
  }

  const onClickLastPage = () => {
    setPage(page-1)
  }

    return (
      <div>
        <h1 className="instruction-title">{instructions[page].title}</h1>
        <p className="instruction-text">{instructions[page].text}</p>
        {instructions[page].button && <button type="button" className="instruction-start-button" onClick={ onClickStart }>Jogar</button>}
        {page !== 0 && <button type="button" className="instruction-left-button" onClick={onClickLastPage}>Página Anterior</button>}
        {page !== 4 && <button type="button" className="instruction-right-button" onClick={onClickNextPage}>Proxima Página</button>}
      </div>
    );
  }
  
  export default InstructionsMainPage;