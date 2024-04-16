import React, { useCallback, useMemo, useState } from 'react'
import Context from './myContext'
import clickSound from "../audios/click.mp3"

function Provider({ children }) {
    const [difficulty, setDifficulty] = useState("easy"); 
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isInstructions, setIsInstructions] = useState(false);
    const [clicked, setClicked] = useState(false);

    const selectDifficulty = ({ target: { value }}) => {
        const sound = new Audio(clickSound)
        sound.play()
        setDifficulty(value);
    }

    const onClickStart = () => {
        const sound = new Audio(clickSound)
        sound.play()
        setClicked(false)
        setClicked(true)
        setIsStarted(true);
    }

    const onClickInstructions = () => {
        const sound = new Audio(clickSound)
        sound.play()
        setClicked(false)
        setClicked(true)
        setIsInstructions(true)
    }

    const onClickNextDifficulty = () => {
        const sound = new Audio(clickSound)
        sound.play()
        setClicked(false)
        setClicked(true)
        setIsStarted(false);
        setIsFinished(false);
        setIsInstructions(false)
        setDifficulty("easy")
    }

    const listData = useMemo(() => ({
        isStarted,
        difficulty,
        isFinished,
        isInstructions,
        clicked,
        setIsInstructions,
        setClicked,
        setIsFinished,
        setDifficulty,
        selectDifficulty,
        onClickStart,
        onClickInstructions,
        onClickNextDifficulty,
    }), [
        isStarted,
        difficulty,
        isFinished,
        isInstructions,
        clicked,
        setIsInstructions,
        setClicked,
        setIsFinished,
        onClickStart,
        onClickInstructions,
        onClickNextDifficulty,
    ])
    return <Context.Provider value={listData}>{children}</Context.Provider>;
}

export default Provider