// SVG icon for the backspace key
const BackspaceIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
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


function KeyBoard({onKeyPress, blackChars}) {
    // the layout of the keyboard
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"];

    const renderKey = (key) => {
        const isSpecialKey = key === "ENTER" || key === "BACKSPACE";
        const keyWidth = isSpecialKey ? 'w-20' : 'w-10'; // special keys wider
        const isBlackChar = blackChars.includes(key);

        return (
            <button
                key={key}
                className={`
          ${keyWidth} h-14 m-1 flex items-center justify-center rounded-md font-bold ${isSpecialKey ? 'bg-slate-400 hover:bg-slate-500 text-black' : isBlackChar ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} text-lg transition-all
        `}
                onClick={(e) => {
                    onKeyPress(e.target.innerText || "BACKSPACE")
                }}
            >
                {key === "BACKSPACE" ? <BackspaceIcon /> : key}
            </button>
        );
    };

    return (
        // Main keyboard container
        <div className="bg-slate-700 p-4 rounded-xl shadow-lg">
            {/* First Row */}
            <div className="flex justify-center">
                {row1.map(key => renderKey(key))}
            </div>
            {/* Second Row */}
            <div className="flex justify-center">
                {row2.map(key => renderKey(key))}
            </div>
            {/* Third Row */}
            <div className="flex justify-center">
                {row3.map(key => renderKey(key))}
            </div>
        </div>
    );
}

export default KeyBoard;