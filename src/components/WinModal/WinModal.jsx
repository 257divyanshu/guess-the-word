function WinModal({ onRestart }) {
  return (
    // Backdrop: a semi-transparent overlay for the whole screen
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      
      {/* Modal Box: the content container */}
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">You Won!</h2>
        <p className="text-lg mb-6 text-gray-600">Congratulations, you guessed the word correctly.</p>
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

export default WinModal;