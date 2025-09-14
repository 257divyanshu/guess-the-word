import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

/**
 * A presentational component for a single letter tile in a guess row.
 * Its color is determined by the boolean props passed to it.
 * @param {object} props - The component props.
 * @param {string} props.value - The letter to display.
 * @param {boolean} props.isBlackChar - True if the letter is not in the word at all.
 * @param {boolean} props.isGreenChar - True if the letter is in the correct position.
 * @param {boolean} props.isYellowChar - True if the letter is in the word but in the wrong position.
 */
function Letter({ value, isBlackChar, isGreenChar, isYellowChar }) {
  return (
    <div
      className={`
        h-12 w-12 mx-[3px] my-[0px] flex items-center justify-center 
        ${isBlackChar ? 'bg-black' : isGreenChar ? 'bg-green-600' : isYellowChar ? 'bg-yellow-500' : 'bg-slate-600'} rounded-md shadow-md
        text-white text-2xl font-bold
  `}
    >
      {/* Render a non-breaking space ('&nbsp;') if the value is empty to maintain the box's height and layout. */}
      {value || '\u00A0'}
    </div>
  );
}

/**
 * Renders a full row of letter tiles for a single guess.
 * It determines the status (color) of each letter after a guess is submitted.
 * @param {object} props - The component props.
 * @param {string[]} [props.letters=[]] - An array of characters for the current guess.
 * @param {number} [props.wordLength=5] - The length of the word, determining the number of tiles.
 * @param {boolean} props.filled - A flag indicating if this guess has been submitted and should be evaluated.
 * @param {string} props.blackChars - A string of all characters confirmed to be incorrect.
 */
function Guess({ letters = [], wordLength = 5, filled, blackChars }) {

  // Access the correct word from the global context for comparison.
  const { selectedWord } = useContext(GameContext)

  // Create an array with a fixed length based on wordLength.
  // This ensures the component always renders the correct number of letter boxes, even if the guess is incomplete.
  const displayLetters = new Array(wordLength)
    .fill(null)
    .map((_, index) => letters[index]?.toUpperCase() || null);

  return (

    <div className="flex justify-center my-1">

      {displayLetters.map((letter, index) => (
        // The logic to determine the color of each letter is evaluated here and passed as props.
        // The evaluation only runs if the 'filled' prop is true.
        <Letter
          key={index}
          value={letter}
          // Note: The color evaluation logic in the parent `PlayGame` component is the primary driver for what is considered a "black char". This component simply visualizes that state.
          isBlackChar={filled && blackChars.includes(letter)}
          isGreenChar={filled && selectedWord[index] === letter}
          isYellowChar={filled && selectedWord[index] !== letter} 
        />
      ))}

    </div>

  );
  
}

export default Guess;