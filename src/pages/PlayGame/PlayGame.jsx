import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";

function PlayGame(){
    return (
        <>
            <div>Play Game page</div>
            <MaskedText
                word={'developer'}
                guessedLetters={['d','e','p']}
            />
            <Link to={'/start'}>Go to StartGame page</Link>
        </>
    )
}
export default PlayGame;