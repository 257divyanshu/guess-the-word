import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame(){

    const navigate = useNavigate();

    function handleSubmission(value){
        navigate('/play', {state : {wordSelected: value}});
    }

    return (
        <>
            <div>Start Game page</div>
            <TextInputFormContainer onFormSubmit={handleSubmission}/>
        </>
    )
}
export default StartGame;