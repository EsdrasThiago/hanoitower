import { useContext, useEffect, useState } from "react";
import Context from "../context/myContext";
import circles from "../mocks/circlesMock";
import towerFunctions from "../utils/towerFunctions"
import '../styles/GamePageStyle.css'
import Finished from "./Finished";

function Game() {

  const [firstTower, setFirstTower] = useState([]);
  const [secondTower, setSecondTower] = useState([]);
  const [thirdTower, setThirdTower] = useState([]);
  const [selected, setSelected] = useState();
  const [lastSelected, setLastSelected] = useState();
  const [firstSelected, setFirstSelected] = useState();
  const [secondSelected, setSecondSelected] = useState();
  const [thirdSelected, setThirdSelected] = useState();
  const [maxArray, setMaxArray] = useState(0)
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { setIsFinished, isFinished, difficulty } = useContext(Context);

  const recordControl = (finished) => {
    const recordStorage = localStorage.getItem(`record${difficulty}`) || null
    if (!recordStorage) {
      setRecord(0)
    }
    if (recordStorage) {
      setRecord(recordStorage)
    }
    if (finished) {
      if (Number(recordStorage) === 0) {
        return localStorage.setItem(`record${difficulty}`, JSON.stringify(score))
      }
      const scoreChecker = score < Number(recordStorage)
      if (scoreChecker) localStorage.setItem(`record${difficulty}`, JSON.stringify(score))
    }
  }

  useEffect(() => {
    if (isFinished) {
      setFirstTower([])
      setSecondTower([])
      setThirdTower([])
    }
  }, [isFinished])

  useEffect(() => {
    recordControl()
    let difficultyNumber = 0
    if (difficulty === "easy") {
      setMaxArray(5)
      difficultyNumber = 5
    } else if (difficulty === "normal") {
      setMaxArray(6)
      difficultyNumber = 6
    } else {
      setMaxArray(8)
      difficultyNumber = 8
    }
    const circlesDifficulty = towerFunctions.arrayLimiter(difficultyNumber, circles)
    setFirstTower(circlesDifficulty)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (lastSelected) {
      setScore(score + 1)
    }
  }, [lastSelected])

  useEffect(() => {
    if (firstSelected || secondSelected || thirdSelected) {
      const selectedElement = document.getElementById("selected")
      selectedElement.animate([
        { marginBottom: "0px" },
        { marginBottom: "100px" }
      ], 1500)
      selectedElement.style.marginBottom = "100px"
    }
    if (lastSelected) {
      const findElement = document.getElementById(lastSelected.color)
      findElement.style.animationName = "coming"
      findElement.style.animationDuration = "1500ms"
      setLastSelected()
    }
  }, [selected, firstSelected, secondSelected, thirdSelected, lastSelected])

  useEffect(() => {
    if ((secondTower.length === maxArray && isLoaded) || (thirdTower.length === maxArray && isLoaded)) {
      recordControl("finished");
      setIsFinished(true);
    }
  }, [secondTower, thirdTower, setIsFinished])

  const cleanSelecteds = () => {
    setLastSelected(selected)
    setFirstSelected();
    setSecondSelected();
    setThirdSelected();
    setSelected();
  }

  const onClickFirstTower = () => {
    if (selected) {
      if (firstTower.length === 0) {
        setFirstTower([selected, ...firstTower])
        return cleanSelecteds()
      }
      const { lowest } = towerFunctions.lowestCircleNumber(firstTower)
      if (selected.size < lowest.size) {
        setFirstTower([selected, ...firstTower])
        return cleanSelecteds()
      }
      if (selected) {
        const findSelected = document.getElementById("selected")
        findSelected.style.animationName = "wrong"
        findSelected.style.animationDuration = "500ms"
        findSelected.style.animationIterationCount = 2
      }
    }
    if (!selected) {
      const { reverse, lowest } = towerFunctions.lowestCircleNumber(firstTower)
      setSelected(lowest);
      setFirstSelected(lowest);
      setFirstTower(reverse);
    }
  }
  const onClickSecondTower = () => {
    if (selected) {
      if (secondTower.length === 0) {
        setSecondTower([selected, ...secondTower])
        return cleanSelecteds()
      }
      const { lowest } = towerFunctions.lowestCircleNumber(secondTower)
      if (selected.size < lowest.size) {
        setSecondTower([selected, ...secondTower])
        return cleanSelecteds()
      }
      if (selected) {
        const findSelected = document.getElementById("selected")
        findSelected.style.animationName = "wrong"
        findSelected.style.animationDuration = "500ms"
        findSelected.style.animationIterationCount = 2
      }
    }
    if (!selected) {
      const { reverse, lowest } = towerFunctions.lowestCircleNumber(secondTower)
      setSelected(lowest);
      setSecondSelected(lowest);
      setSecondTower(reverse);
    }
  }
  const onClickThirdTower = () => {
    if (selected) {
      if (thirdTower.length === 0) {
        setThirdTower([selected, ...thirdTower])
        return cleanSelecteds()
      }
      const { lowest } = towerFunctions.lowestCircleNumber(thirdTower)
      if (selected.size < lowest.size) {
        setThirdTower([selected, ...thirdTower])
        return cleanSelecteds()
      }
      if (selected) {
        const findSelected = document.getElementById("selected")
        findSelected.style.animationName = "wrong"
        findSelected.style.animationDuration = "500ms"
        findSelected.style.animationIterationCount = 2
      }
    }
    if (!selected) {
      const { reverse, lowest } = towerFunctions.lowestCircleNumber(thirdTower)
      setSelected(lowest);
      setThirdSelected(lowest);
      setThirdTower(reverse.sort());
    }
  }

  return (
    <div className="main-game">
      <div className="record">
        <h1>Recorde - {record} -</h1>
      </div>
      <div className="points">
        <h1>Pontuação - {score} -</h1>
      </div>
      <div className="main-towers">
        <div className="tower-game">
          <button id="first" type="button" onClick={onClickFirstTower} />
          {firstSelected && <div className={selected.className + " selected"} id="selected" style={{ backgroundColor: selected.color, width: selected.size * 8 + 10 + "px", height: "10px" }} />}
          {firstTower?.map((e) => (<div className={e.className} id={e.color} style={{ backgroundColor: e.color, width: e.size * 8 + 10 + "px", height: "10px" }} key={e.size} />))}
        </div>
        <div className="tower-game">
          <button id="second" type="button" onClick={onClickSecondTower} />
          {secondSelected && <div className={selected.className + " selected"} id="selected" style={{ backgroundColor: selected.color, width: selected.size * 8 + 10 + "px", height: "10px" }} />}
          {secondTower?.map((e) => (<div className={e.className} id={e.color} style={{ backgroundColor: e.color, width: e.size * 8 + 10 + "px", height: "10px" }} key={e.size} />))}
        </div>
        <div className="tower-game">
          <button id="third" type="button" onClick={onClickThirdTower} />
          {thirdSelected && <div className={selected.className + " selected"} id="selected" style={{ backgroundColor: selected.color, width: selected.size * 8 + 10 + "px", height: "10px" }} />}
          {thirdTower?.map((e) => (<div className={e.className} id={e.color} style={{ backgroundColor: e.color, width: e.size * 8 + 10 + "px", height: "10px" }} key={e.size} />))}
        </div>
      </div>
      <hr className="table-bottom" />
      <div className="background-image" />
      {isFinished && <Finished />}
    </div>
  );
}

export default Game;
