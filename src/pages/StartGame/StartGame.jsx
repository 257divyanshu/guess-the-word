import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
import { useContext } from "react";
import SelectWordLength from "../../components/SelectWordLength/SelectWordLength";
import { GameContext } from "../../context/GameContext";

function StartGame() {

    const { wordLength, handleWordLengthSubmission, handleSubmission } = useContext(GameContext)

    return (
        <>
            <div className=" h-[80vh] flex justify-center items-center">
                {!wordLength && <SelectWordLength onWordLengthSubmit={handleWordLengthSubmission} />}
                {wordLength && <TextInputFormContainer onFormSubmit={handleSubmission} wordLength={wordLength} />}
            </div>
        </>
    )
}
export default StartGame;