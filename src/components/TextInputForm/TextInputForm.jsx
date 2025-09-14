import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

/**
 * A presentational component that renders the user interface for the text input form.
 * It is a "dumb" component that receives all its state and event handlers as props from a container component.
 * @param {object} props - The component's props.
 * @param {function} props.handleFormSubmit - Function to call when the form is submitted.
 * @param {string} props.textInputType - The current type of the text input ('password' or 'text').
 * @param {function} props.handleTextInputChange - Function to call on input field changes.
 * @param {string} props.value - The current value of the text input.
 * @param {function} props.setTextInputType - Function to update the text input type.
 * @param {string} props.textInputPlaceHolder - Placeholder text for the input field.
 * @param {string} props.status - The current status of the form ('validating', 'success', etc.).
 */
function TextInputForm({ handleFormSubmit, textInputType, handleTextInputChange, value, setTextInputType, textInputPlaceHolder, status }) {

    // A derived boolean to determine if the form is in a non-interactive state.
    // Buttons will be disabled when the parent is validating the word or has just succeeded.
    const isBusy = status === 'validating' || status === 'success';

    return (

        <form className="mx-auto flex flex-col gap-y-8 py-10 px-8 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/3 bg-white" onSubmit={handleFormSubmit}
            onKeyDown={(e) => {
                // Prevent the default browser behavior of submitting the form when 'Enter' is pressed in a text field.
                // This ensures the user must explicitly click the "Play" button.
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            }}>

            {/* The main text input field for the user to enter a word */}
            <div>
                <TextInput
                    inputPlaceHolder={textInputPlaceHolder}
                    inputType={textInputType}
                    inputOnChange={handleTextInputChange}
                    inputValue={value}
                />
            </div>

            {/* Container for the form action buttons */}
            <div className="flex justify-center">

                {/* Button to toggle the visibility of the word in the input field */}
                <div className="mx-4 w-20">
                    <Button
                        btnText={textInputType == "password" ? "Show" : "Hide"}
                        btnOnClick={() => {
                            setTextInputType(textInputType == "password" ? "text" : "password")
                        }}
                        // 'btnType' is set to 'button' to prevent this button from submitting the form.
                        btnType="button"
                        btnDisabled={isBusy}
                    >
                    </Button>
                </div>

                {/* The main submit button for the form */}
                <div className="mx-4 w-20">
                    <Button
                        btnText="Play"
                        btnType="submit"
                        btnDisabled={isBusy}
                    >
                    </Button>
                </div>

            </div>

        </form>
        
    )

}

export default TextInputForm;