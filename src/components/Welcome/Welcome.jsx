import Button from "../Button/Button";

function Welcome({ onStart }) {
  return (
    <div className="h-[90vh] flex justify-center items-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[85vw] max-w-lg">
      {/* <div className="bg-white p-10 rounded-xl max-w-lg"> */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to <br /> Guess the Word!
        </h1>
        <p className="text-xl text-gray-800 mb-6 text-center">
          The two-player word-guessing game.
        </p>

        <div className="text-left mb-10 border-t border-gray-300 pt-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">How to Play</h2>
          <ul className=" space-y-2 text-gray-800">
            <li><strong>Player 1</strong> types in a secret word.</li>
            <li><strong>Player 2</strong> gets 5 attempts to guess it.</li>
          </ul>
          <div className="text-gray-800 mt-8">
            <span className="font-bold">Pro Tip: </span>
            <span>Choose a word with no duplicate letters.</span>
          </div>
        </div>

        <Button
          btnText={'Play Now'}
          btnOnClick={onStart}
        />
      </div>
    </div>
  );
}

export default Welcome;