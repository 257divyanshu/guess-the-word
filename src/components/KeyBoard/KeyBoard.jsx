/**
 * A functional component that renders an SVG icon for the backspace key.
 * This is used within the KeyBoard component to provide a visual icon instead of text.
 */
const BackspaceIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 26 26"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
        />
    </svg>
);

/**
 * A presentational component that renders the virtual keyboard for the game.
 * It handles the layout and styling of keys and calls a parent function on key presses.
 * @param {object} props - The component props.
 * @param {function} props.onKeyPress - A callback function that is invoked when a key is clicked.
 * @param {string} props.blackChars - A string containing letters that should be styled as incorrect (black).
 */
function KeyBoard({ onKeyPress, blackChars }) {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"];

    /**
     * A helper function to render a single, styled key button.
     * This avoids repeating complex JSX inside the map functions.
     * @param {string} key - The string value of the key to render (e.g., "A", "ENTER").
     */
    const renderKey = (key) => {

        // Use flexbox classes to create variably sized keys for a realistic layout.
        // Special keys like ENTER and BACKSPACE are made wider.
        let flexClass;
        if (key === 'ENTER') {
            flexClass = 'flex-[1.5]'; // Make ENTER 1.5x wider than a normal key
        } else if (key === 'BACKSPACE') {
            flexClass = 'flex-[1.25]'; // Make BACKSPACE 1.25x wider than a normal key
        } else {
            flexClass = 'flex-1'; // Normal keys take up 1 unit of space
        }

        const isSpecialKey = key === "ENTER" || key === "BACKSPACE";
        const isBlackChar = blackChars.includes(key);

        return (
            
            <button
                key={key}
                className={`
                    ${flexClass} h-12 m-1 flex items-center justify-center rounded-md font-bold text-lg 
                    ${isSpecialKey ? 'bg-slate-400 hover:bg-slate-500 text-black text-xs' : isBlackChar ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} 
                    transition-all
                `}
                onClick={() => {
                    // When a key is clicked, call the onKeyPress prop.
                    // If the key is BACKSPACE, its innerText will be empty (due to the SVG),
                    // so we explicitly pass the string "BACKSPACE".
                    onKeyPress(key)
                }}
            >
                {/* Render the BackspaceIcon component for the backspace key, otherwise render the key's text. */}
                {key === "BACKSPACE" ? <BackspaceIcon /> : key}
            </button>

        );

    };

    return (

        <div className="flex justify-center">

            {/* Main container for the keyboard with a styled background */}
            <div className="w-full max-w-lg bg-slate-700 p-2 rounded-xl">

                {/* Map over each row array to render the keys */}
                <div className="flex justify-center">
                    {row1.map(key => renderKey(key))}
                </div>
                <div className="flex justify-center">
                    {row2.map(key => renderKey(key))}
                </div>
                <div className="flex justify-center">
                    {row3.map(key => renderKey(key))}
                </div>

            </div>

        </div>

    );
    
}

export default KeyBoard;