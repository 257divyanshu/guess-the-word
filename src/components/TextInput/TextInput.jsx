import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

function TextInput({inputLabel, inputType="text", inputValue, inputOnChange}){
    const {wordLength} = useContext(GameContext);

    return (
        <label>
            {inputLabel && <span>{inputLabel}</span>}
            <input
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
                onChange={inputOnChange}
                placeholder={inputLabel}
                type={inputType}
                value={inputValue}
                maxLength={wordLength}
            />
        </label>
    )
}

export default TextInput;