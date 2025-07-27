import { Link } from "react-router-dom";

function StartGame(){
    return (
        <>
            <div>Start Game page</div>
            <Link to={'/play'}>Go to P  layGame page</Link>
        </>
    )
}
export default StartGame;