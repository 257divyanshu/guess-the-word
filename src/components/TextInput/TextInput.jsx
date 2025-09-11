import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

function TextInput({inputPlaceHolder, inputType="text", inputValue, inputOnChange}){
    const {wordLength} = useContext(GameContext);

    return (
            <input
                className="px-4 py-2 border-[1px] border-blue-500 rounded-md w-full text-center focus:outline-none text-blue-500 placeholder:text-blue-300 font-bold focus:placeholder:text-transparent"
                onChange={inputOnChange}
                placeholder={inputPlaceHolder}
                type={inputType}
                value={inputValue}
                maxLength={wordLength}
                autoComplete="one-time-code"
            />
    )
}

export default TextInput;