import { useLocation } from "react-router-dom";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import MaskedText from "../../components/MaskedText/MaskedText";

function PlayGame() {
    const [usedLetters, setUsedLetters] = useState([]);
    const location = useLocation();
    const wordSelected = location.state?.wordSelected;
    function handleLetterClick(char) {
        setUsedLetters([...usedLetters, char]);
    }
    return (
        <>
            <div>Play Game page</div>
            <MaskedText word={wordSelected} usedLetters={usedLetters} />
            <div className="flex justify-between items-center">
                <div className="basis-2/4">
                    <LetterButtons
                        word={wordSelected}
                        usedLetters={usedLetters}
                        onLetterClick={handleLetterClick}
                    />
                </div>
            </div>
        </>
    )
}
export default PlayGame;