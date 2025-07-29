import { Link, useLocation } from "react-router-dom";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";

function PlayGame(){
    const [usedLetters, setUsedLetters] = useState([]);
    const location = useLocation();
    const wordSelected = location.state?.wordSelected;
    function handleLetterClick(char){
        setUsedLetters([...usedLetters, char]); 
    }
    return (
        <>
            <div>Play Game page</div>
            <LetterButtons
                word={wordSelected}
                usedLetters={usedLetters}
                onLetterClick={handleLetterClick}
            />
        </>
    )
}
export default PlayGame;