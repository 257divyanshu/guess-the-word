import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function WinModal({ onRestart, word }) {
  return (
    // Backdrop: a semi-transparent overlay for the whole screen
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

      {/* Modal Box: the content container */}
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">

        {/* 1. Header updated */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          You guessed it right!
        </h2>

        {/* 2. Word display updated with new phrase and smaller text */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-xl font-bold tracking-wider text-gray-700">
            {/* {`It was  ${word}`} */}
            <span className="text-gray-700">It was </span>
            <span className="text-green-500">{word}</span>
          </p>
        </div>

        {/* 3. Subtext updated */}
        {/* <p className="text-xl mb-6 text-gray-600">
          Congratulations ✨
        </p> */}

        <DotLottieReact
          src="/won.lottie"
          loop
          autoplay
          // className='border border-black h-[120px]'
          className='h-[120px]'
        />

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