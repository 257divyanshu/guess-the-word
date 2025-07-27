import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame(){

    const navigate = useNavigate();

    function handleSubmission(){
        navigate('/play');
    }

    return (
        <>
            <div>Start Game page</div>
            <TextInputFormContainer onFormSubmit={handleSubmission}/>
            {/* <Link to={'/play'}>Go to P  layGame page</Link> */}
        </>
    )
}
export default StartGame;