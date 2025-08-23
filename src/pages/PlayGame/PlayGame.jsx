import { useLocation } from "react-router-dom";
import Guess from "../../components/Guess/Guess";
import KeyBoard from "../../components/KeyBoard/KeyBoard";

function PlayGame() {
    const location = useLocation();
    const wordLength = location.state?.wordLength;
    return (
        <>
            <Guess letters={['a','b','c','d','e']} wordLength={wordLength}/>
            <Guess letters={['a','b','c','d','e']} wordLength={wordLength}/>
            <Guess letters={['a','b','c','d','e']} wordLength={wordLength}/>
            <Guess letters={['a','b','c','d','e']} wordLength={wordLength}/>
            <Guess letters={['a','b','c','d','e']} wordLength={wordLength}/>
            <Guess letters={['a','b','c','d','e']} wordLength={wordLength}/>
            <KeyBoard/>
        </>
    )
}
export default PlayGame;