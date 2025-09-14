import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

/**
 * A small, presentational component for rendering a colored letter tile.
 * It's used exclusively within the HowToPlayModal to build visual examples.
 * @param {object} props - The component props.
 * @param {string} props.letter - The character to display in the tile.
 * @param {string} props.color - The color theme ('green', 'yellow', or 'black').
 */
const ExampleLetter = ({ letter, color }) => {

  // Maps the color prop to specific Tailwind CSS classes for styling.
  const colorClasses = {
    green: 'bg-green-500 border-green-500',
    yellow: 'bg-yellow-500 border-yellow-500',
    black: 'bg-black border-black',
  };

  return (

    <div className={`w-10 h-10 flex items-center justify-center font-bold text-white text-xl border-2 ${colorClasses[color]}`}>
      {letter}
    </div>

  );

};

/**
 * A modal component that displays instructions on how to play the guessing part of the game.
 * It explains the color-coding of letters and shows a relevant example.
 * @param {object} props - The component props.
 * @param {function} props.onClose - A callback function to be executed when the close button is clicked.
 */
function HowToPlayModal({ onClose }) {

  // Access the current wordLength from the context to display dynamic instructions.
  const { wordLength } = useContext(GameContext)
  
  return (

    // Backdrop: A fixed, full-screen overlay.
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

      {/* Modal Box: Contains all the instructional content. It's scrollable on smaller viewports. */}
      <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-lg w-[85vw] mx-4 max-h-[70vh] lg:max-h-[90vh] overflow-y-auto scrollbar-visible">

        {/* Absolute-positioned close button in the top-right corner. */}
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-800">&times;</button>

        <h2 className="text-2xl font-bold mb-4 text-center">How to Guess</h2>

        {/* Basic game rules */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Type in a {wordLength} letter word and press ENTER to submit your guess.</li>
          <li>After making a guess, the letters will change colors to show how close your guess was to the secret word.</li>
        </ul>

        {/* Color key explanation */}
        <div className="my-4 space-y-3">
          <div className="flex items-center">
            <span className="px-2 py-1 bg-green-500 text-white font-bold rounded mr-3">Green</span>
            <span>&ndash; the letter is in the correct position.</span>
          </div>
          <div className="flex items-center">
            <span className="px-2 py-1 bg-yellow-500 text-white font-bold rounded mr-3">Yellow</span>
            <span>&ndash; the letter is in the secret word, but not in the correct position.</span>
          </div>
          <div className="flex items-center">
            <span className="px-2 py-1 bg-black text-white font-bold rounded mr-3">Black</span>
            <span>&ndash; the letter is not in the secret word.</span>
          </div>
        </div>

        {/* Conditionally rendered examples based on the current game's word length. */}
        <h3 className="text-xl font-bold mt-6 mb-2">Example</h3>
        {wordLength==5 && <div className="space-y-2">

          <p>If the secret word is <strong>DRINK</strong>:</p>
          <div className="flex space-x-1">
            <ExampleLetter letter="P" color="black" />
            <ExampleLetter letter="R" color="green" />
            <ExampleLetter letter="O" color="black" />
            <ExampleLetter letter="U" color="black" />
            <ExampleLetter letter="D" color="yellow" />
          </div>
          <div className="flex space-x-1">
            <ExampleLetter letter="D" color="green" />
            <ExampleLetter letter="R" color="green" />
            <ExampleLetter letter="E" color="black" />
            <ExampleLetter letter="A" color="black" />
            <ExampleLetter letter="M" color="black" />
          </div>
          <div className="flex space-x-1">
            <ExampleLetter letter="D" color="green" />
            <ExampleLetter letter="R" color="green" />
            <ExampleLetter letter="I" color="green" />
            <ExampleLetter letter="N" color="green" />
            <ExampleLetter letter="K" color="green" />
          </div>
        </div>}

        {wordLength==4 && <div className="space-y-2">
          <p>If the secret word is <strong>WORK</strong>:</p>
          <div className="flex space-x-1">
            <ExampleLetter letter="R" color="yellow" />
            <ExampleLetter letter="A" color="black" />
            <ExampleLetter letter="I" color="black" />
            <ExampleLetter letter="L" color="black" />
          </div>
          <div className="flex space-x-1">
            <ExampleLetter letter="G" color="black" />
            <ExampleLetter letter="R" color="yellow" />
            <ExampleLetter letter="E" color="black" />
            <ExampleLetter letter="Y" color="black" />
          </div>
          <div className="flex space-x-1">
            <ExampleLetter letter="F" color="black" />
            <ExampleLetter letter="O" color="green" />
            <ExampleLetter letter="U" color="black" />
            <ExampleLetter letter="R" color="yellow" />
          </div>
          <div className="flex space-x-1">
            <ExampleLetter letter="C" color="black" />
            <ExampleLetter letter="O" color="green" />
            <ExampleLetter letter="R" color="green" />
            <ExampleLetter letter="K" color="green" />
          </div>
          <div className="flex space-x-1">
            <ExampleLetter letter="W" color="green" />
            <ExampleLetter letter="O" color="green" />
            <ExampleLetter letter="R" color="green" />
            <ExampleLetter letter="K" color="green" />
          </div>

        </div>}

      </div>

    </div>

  );
  
}

export default HowToPlayModal;