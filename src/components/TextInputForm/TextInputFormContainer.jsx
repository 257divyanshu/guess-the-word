import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { validWord } from "../../services/validateWord";

// A simple helper function to create a delay for UX purposes (e.g., showing a status message).
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * A container component that manages the logic for the word input form.
 * It handles state, validation, API calls, and passes props down to the presentational TextInputForm component.
 * @param {object} props - The component props.
 * @param {function} props.onFormSubmit - Callback function to execute when a valid word is submitted.
 * @param {number} props.wordLength - The required length of the word to be submitted.
 */
function TextInputFormContainer({ onFormSubmit, wordLength }) {

    // Manages the value of the text input field.
    const [value, setValue] = useState('');

    // Toggles the input field type between 'password' and 'text' to show/hide the word.
    const [textInputType, setTextInputType] = useState('password');

    // Manages the current status of the form to provide user feedback.
    // Possible states: 'idle', 'validating', 'success', 'error', 'networkError'.
    const [status, setStatus] = useState('idle');

    /**
     * Handles the form submission process.
     * It validates the word's length, checks network status, calls an external service to validate the word, and updates the UI status accordingly.
     * @param {Event} e - The form submission event.
     */
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Early return if the word length doesn't match the requirement.
        if (value.length !== wordLength) return;
        
        const wordToValidate = value;
        setValue(''); // Clear the input field immediately for better UX.

        // Check for network connection before attempting an API call.
        if (!navigator.onLine) {
            setStatus('networkError');
            return;
        }

        // Begin the validation process.
        setStatus('validating');

        await delay(1000); // Artificial delay to show the 'validating' message.

        try {
            const isValid = await validWord(wordToValidate);

            if (isValid) {
                // On successful validation, update status and submit the word.
                setStatus('success');
                await delay(1000); // Show success message before proceeding.
                onFormSubmit?.(wordToValidate.toUpperCase());
            } else {
                // The API returned that the word is not a valid dictionary word.
                setStatus('error'); // Word is syntactically wrong
            }
        } catch (error) {
            // Catches errors from the API call, most likely network-related.
            console.error("API Error:", error);
            setStatus('networkError');
        }
    };

    /**
     * Updates the 'value' state as the user types in the input field.
     * @param {Event} e - The input change event.
     */
    function handleTextInputChange(e) {
        setValue(e.target.value);
    }

    // DERIVED STATE
    // -------------
    // Determine the placeholder text based on the current form status.
    // This provides real-time feedback to the user.
    let textInputPlaceHolder = 'enter a word';
    if (status === 'validating') textInputPlaceHolder = 'validating word...';
    if (status === 'success') textInputPlaceHolder = 'word validated!';
    if (status === 'error') textInputPlaceHolder = 'please enter a valid word';
    if (status === 'networkError') textInputPlaceHolder = 'connection error';

    // This container's sole purpose is to pass the managed state and logic down to the purely presentational TextInputForm component.
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