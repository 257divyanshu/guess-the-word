import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
import { useState } from "react";
import SelectWordLength from "../../components/SelectWordLength/SelectWordLength";

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
            {!wordLength && <SelectWordLength onWordLengthSubmit={handleWordLengthSubmission}/>}
            {wordLength && <TextInputFormContainer onFormSubmit={handleSubmission}/>}
        </>
    )
}
export default StartGame;