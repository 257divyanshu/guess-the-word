import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
import { useState } from "react";
import SelectWordLength from "../../components/SelectWordLength/SelectWordLength";
import {GameContext} from "../../context/GameContext";

function StartGame(){

    const [wordLength, setWordLength] = useState();

    const navigate = useNavigate();

    function handleSubmission(value){
        navigate('/play', {state : {wordSelected: value}});
    }

    function handleWordLengthSubmission(wordLength){
        setWordLength(wordLength);
    }

    return (
        <>
            <GameContext.Provider value={{wordLength}}>
                {!wordLength && <SelectWordLength onWordLengthSubmit={handleWordLengthSubmission}/>}
                {wordLength && <TextInputFormContainer onFormSubmit={handleSubmission} wordLength={wordLength}/>}
            </GameContext.Provider>
        </>
    )
}
export default StartGame;