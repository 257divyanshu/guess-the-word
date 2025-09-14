import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

/**
 * A generic, styled text input component used as a controlled input field.
 * It's designed to be reusable throughout the application.
 * @param {object} props - The component's props.
 * @param {string} props.inputPlaceHolder - The placeholder text to display when the input is empty.
 * @param {string} [props.inputType="text"] - The type of the input (e.g., 'text', 'password'). Defaults to 'text'.
 * @param {string} props.inputValue - The current value of the input, making it a controlled component.
 * @param {function} props.inputOnChange - The callback function to execute when the input's value changes.
 */
function TextInput({ inputPlaceHolder, inputType = "text", inputValue, inputOnChange }) {

    // Consume the GameContext to get the required wordLength.
    const { wordLength } = useContext(GameContext);

    return (

        <input
            className="px-4 py-2 border-[1px] border-blue-500 rounded-md w-full text-center focus:outline-none text-blue-500 placeholder:text-blue-300 font-bold focus:placeholder:text-transparent"
            onChange={inputOnChange}
            placeholder={inputPlaceHolder}
            type={inputType}
            value={inputValue}
            // The maxLength is dynamically set based on the word length chosen by the user in the setup phase.
            maxLength={wordLength}
            // Using autocomplete="one-time-code" trick to prevent browsers from suggesting saved usernames, passwords, or other autofill data.
            autoComplete="one-time-code"
        />

    )
    
}

export default TextInput;