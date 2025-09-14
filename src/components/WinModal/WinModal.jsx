// Import the Lottie animation player component
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/**
 * A modal component that is displayed when the player successfully guesses the word.
 * It shows a congratulatory message, the correct word, an animation, and a "Play Again" button.
 * @param {object} props - The component props.
 * @param {function} props.onRestart - A callback function to be executed when the "Play Again" button is clicked, which resets the game.
 * @param {string} props.word - The correct word that was guessed, to be displayed in the modal.
 */
function WinModal({ onRestart, word }) {
  return (
    // Backdrop: A fixed, full-screen overlay with a semi-transparent background to focus attention on the modal.
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

      {/* Modal Box: The main container for the modal's content. */}
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">

        {/* Header message */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          You guessed it right!
        </h2>

        {/* Displays the correct word */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-xl font-bold tracking-wider text-gray-700">
            {/* {`It was  ${word}`} */}
            <span className="text-gray-700">It was </span>
            <span className="text-green-500">{word}</span>
          </p>
        </div>

        {/* Lottie animation for a celebratory visual effect */}
        <DotLottieReact
          src="/won.lottie"
          loop
          autoplay
          className='h-[120px]'
        />

        {/* Action Button: Triggers the onRestart function to start a new game. */}
        <button
          onClick={onRestart}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
        >
          Play Again
        </button>

      </div>

    </div>

  );
  
}

export default WinModal;