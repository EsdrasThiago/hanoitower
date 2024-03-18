import React, { useCallback, useMemo, useState } from 'react'
import Context from './myContext'

function Provider({ children }) {
    const [difficulty, setDifficulty] = useState("easy"); 
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isInstructions, setIsInstructions] = useState(false);

    const selectDifficulty = ({ target: { value }}) => {
        setDifficulty(value);
    }

    const onClickStart = () => {
        setIsStarted(true);
    }

    const onClickInstructions = () => {
        setIsInstructions(true)
    }

    const listData = useMemo(() => ({
        isStarted,
        difficulty,
        isFinished,
        isInstructions,
        setIsFinished,
        setDifficulty,
        selectDifficulty,
        onClickStart,
        onClickInstructions,
    }), [
        isStarted,
        difficulty,
        isFinished,
        isInstructions,
        setIsFinished,
        onClickStart,
        onClickInstructions,
    ])
    return <Context.Provider value={listData}>{children}</Context.Provider>;
}

export default Provider