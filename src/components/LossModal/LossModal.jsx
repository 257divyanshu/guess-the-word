// Import the Lottie animation player component
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/**
 * A modal component that is displayed when the player fails to guess the word within the allowed attempts.
 * It informs the user they've lost, reveals the correct word, and provides an option to restart the game.
 * @param {object} props - The component props.
 * @param {function} props.onRestart - A callback function to be executed when the "Restart" button is clicked.
 * @param {string} props.word - The correct word that the player failed to guess.
 */
function LossModal({ onRestart, word }) {
  
  return (

    // Backdrop: A fixed, full-screen overlay to focus attention on the modal.
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      
      {/* Modal Box: The main container for the modal's content. */}
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        
        {/* Header message */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          You ran out of chances!
        </h2>

        {/* Reveals the correct word to the player */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-xl font-bold tracking-wider text-gray-700">
            {/* {`It was  ${word}`} */}
            <span className="text-gray-700">It was </span>
            <span className="text-green-500">{word}</span>
          </p>
        </div>

        {/* Lottie animation for a "game over" visual effect */}
        <DotLottieReact
          src="/loss.lottie"
          loop
          autoplay
          className='h-[120px]'
        />

        {/* Action Button: Triggers the onRestart function to start a new game. */}
        <button
          onClick={onRestart}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
        >
          Restart
        </button>

      </div>
      
    </div>

  );

}

export default LossModal;