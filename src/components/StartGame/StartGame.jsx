import TextInputFormContainer from "../TextInputForm/TextInputFormContainer";
import { useContext } from "react";
import SelectWordLength from "../SelectWordLength/SelectWordLength";
import { GameContext } from "../../context/GameContext";

/**
 * The StartGame component manages the setup phase of the game.
 * This phase consists of two steps:
 * 1. Player1 selects the length of the secret word.
 * 2. Player1 types the secret word.
 * The component uses conditional rendering to show the appropriate UI for each step.
 */
function StartGame() {
    // Accessing shared state and functions from the global GameContext.
    const { wordLength, handleWordLengthSubmission, handleSubmission } = useContext(GameContext)

    return (
        
        <>

            {/* Centering container for the setup forms */}
            <div className=" h-[80vh] flex justify-center items-center">

                {/* STEP 1: If the word length has not been set yet, render the 
                  component for selecting the word length.
                */}
                {!wordLength && <SelectWordLength onWordLengthSubmit={handleWordLengthSubmission} />}

                {/* STEP 2: Once the word length is set, render the text input form 
                  for the user to submit the secret word.
                */}
                {wordLength && <TextInputFormContainer onFormSubmit={handleSubmission} wordLength={wordLength} />}

            </div>

        </>

    )

}

export default StartGame;