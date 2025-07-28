import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";

function PlayGame(){
    return (
        <>
            <div>Play Game page</div>
            <LetterButtons
                word={'developer'}
            />
        </>
    )
}
export default PlayGame;