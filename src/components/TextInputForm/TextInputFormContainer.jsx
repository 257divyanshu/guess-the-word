import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { validWord } from "../../services/validateWord";

// A simple helper function to create a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function TextInputFormContainer({ onFormSubmit, wordLength }) {
    const [value, setValue] = useState('');
    const [textInputType, setTextInputType] = useState('password');
    const [status, setStatus] = useState('idle');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (value.length !== wordLength) return;

        const wordToValidate = value;
        setValue('');

        // 1. Quick check for offline status before starting
        if (!navigator.onLine) {
            setStatus('networkError');
            return;
        }

        setStatus('validating');

        await delay(1000);

        try {
            const isValid = await validWord(wordToValidate);

            if (isValid) {
                setStatus('success');
                await delay(1000);
                onFormSubmit?.(wordToValidate.toUpperCase());
            } else {
                setStatus('error'); // Word is syntactically wrong
            }
        } catch (error) {
            // 2. The API call failed, likely a network issue
            console.error("API Error:", error);
            setStatus('networkError');
        }
    };

    function handleTextInputChange(e) {
        setValue(e.target.value);
    }

    let textInputPlaceHolder = 'enter a word';
    if (status === 'validating') textInputPlaceHolder = 'validating word...';
    if (status === 'success') textInputPlaceHolder = 'word validated!';
    if (status === 'error') textInputPlaceHolder = 'please enter a valid word';
    if (status === 'networkError') textInputPlaceHolder = 'connection error';

    return (
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            textInputType={textInputType}
            handleTextInputChange={handleTextInputChange}
            value={value}
            setTextInputType={setTextInputType}
            textInputPlaceHolder={textInputPlaceHolder}
            status={status}
        />
    );
}

export default TextInputFormContainer;