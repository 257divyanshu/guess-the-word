import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

// A single styled letter box
function Letter({ value, isBlackChar, isGreenChar, isYellowChar }) {
  return (
    <div
      className={`
        h-12 w-12 mx-[3px] my-[0px] flex items-center justify-center 
        ${isBlackChar ? 'bg-black' : isGreenChar ? 'bg-green-600' : isYellowChar ? 'bg-yellow-500' : 'bg-slate-600'} rounded-md shadow-md
        text-white text-2xl font-bold
  `}
    >
      {/* Render a non-breaking space if the value is empty to maintain height */}
      {value || '\u00A0'}
    </div>
  );
}

// The main component to display a row of letters
function Guess({ letters = [], wordLength = 5, filled, blackChars }) { // Default to 5 for safety

  const { selectedWord } = useContext(GameContext)

  // Create an array with a fixed length, filled with the provided letters
  const displayLetters = new Array(wordLength)
    .fill(null)
    .map((_, index) => letters[index]?.toUpperCase() || null);

  return (
    <div className="flex justify-center my-1">
      {displayLetters.map((letter, index) => (
        <Letter key={index} value={letter} isBlackChar={filled && blackChars.includes(letter)} isGreenChar={filled && selectedWord[index] === letter} isYellowChar={filled && selectedWord[index] !== letter} />
      ))}
    </div>
  );
}

export default Guess;