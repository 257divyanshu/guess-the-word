import Button from "../Button/Button";

/**
 * A component that allows the user to select the length of the word to be guessed.
 * This is the first step in the game setup process.
 * @param {object} props - The component props.
 * @param {function} props.onWordLengthSubmit - A callback function that is executed when a length is chosen. It passes the selected number (4 or 5) to the parent component.
 */
function SelectWordLength({ onWordLengthSubmit }) {

    return (

        // Main container card for the word length selection UI.
        <div className="mx-auto flex flex-col gap-y-8 py-10 px-4 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/3 bg-white">

            {/* Instructional text for the user. */}
            <div className="text-2xl font-bold text-center text-gray-800">Choose the word length</div>

            {/* Container for the selection buttons. */}
            <div className="flex justify-center">

                {/* Button for selecting a 4-letter word. Clicking it triggers the callback. */}
                <div className="mx-4 w-16">
                    <Button
                        btnText={4}
                        btnType={"button"}
                        btnOnClick={() => onWordLengthSubmit(4)}
                    />
                </div>

                 {/* Button for selecting a 5-letter word. Clicking it triggers the callback. */}
                <div className="mx-4 w-16">
                    <Button
                        btnText={5}
                        btnType={"button"}
                        btnOnClick={() => onWordLengthSubmit(5)}
                    />
                </div>

            </div>

        </div>

    )

}

export default SelectWordLength;