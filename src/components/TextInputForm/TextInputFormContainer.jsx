import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({onFormSubmit}) {

    let [value, setValue] = useState('');

    let [textInputType, setTextInputType] = useState('password');

    function handleFormSubmit(e) {
        e.preventDefault();
        onFormSubmit?.(value.toUpperCase());
    }

    function handleTextInputChange(e) {
        // console.log(e.target.value);
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