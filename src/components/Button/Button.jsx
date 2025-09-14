/**
 * A generic, styled, and reusable button component for the application.
 * @param {object} props - The component's props.
 * @param {string} props.btnText - The text to be displayed inside the button.
 * @param {string} props.btnType - The native HTML 'type' of the button (e.g., 'button', 'submit').
 * @param {function} props.btnOnClick - The callback function to execute when the button is clicked.
 * @param {boolean} props.btnDisabled - A boolean to determine if the button should be in a disabled state.
 * @param {string} [props.btnColor='blue'] - The color theme of the button. Accepts 'blue' or 'green'. Defaults to 'blue'.
 */
function Button({ btnText, btnType, btnOnClick, btnDisabled, btnColor='blue'}) {

    /**
     * A wrapper for the onClick handler that introduces a small delay.
     * This delay ensures that the button's 'active' scale animation is visible to the user before the onClick action (like navigating away) occurs, improving UX.
     */
    function handleClick() {
        // Only trigger the click handler if it exists.
        if(btnOnClick){
            setTimeout(btnOnClick, 400);
        };
    };

    // An object that maps the btnColor prop to specific Tailwind CSS classes.
    // This makes it easy to add new color themes in the future.
    const colorStyles = {
    blue: 'bg-blue-500 lg:hover:bg-blue-600',
    green: 'bg-green-500 lg:hover:bg-green-600',

  };

    return (

        <button
            // Dynamically constructs the className string using base styles and the selected color style.
            className={`
        px-4 py-2 ${colorStyles[btnColor]} text-white font-bold rounded-md 
        transition-all active:scale-95 w-full disabled:opacity-50 disabled:cursor-not-allowed
      `}
            type={btnType}
            onClick={handleClick}
            disabled={btnDisabled}
        >
            {btnText}
        </button>

    );
    
}

export default Button;