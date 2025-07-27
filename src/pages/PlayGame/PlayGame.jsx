import { Link } from "react-router-dom";

function PlayGame(){
    return (
        <>
            <div>Play Game page</div>
            <Link to={'/start'}>Go to StartGame page</Link>
        </>
    )
}
export default PlayGame;