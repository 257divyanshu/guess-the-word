import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({onFormSubmit, wordLength}) {

    let [value, setValue] = useState('');

    let [textInputType, setTextInputType] = useState('password');

    function handleFormSubmit(e) {
        e.preventDefault();
        if(value.length===wordLength){
            onFormSubmit?.(value.toUpperCase());
        }
    }

    function handleTextInputChange(e) {
        setValue(e.target.value);
    }

    return (
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            textInputType={textInputType}
            handleTextInputChange={handleTextInputChange}
            value={value}
            setTextInputType={setTextInputType}
        />
    )
}
export default TextInputFormContainer;