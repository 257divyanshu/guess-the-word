import Button from "../Button/Button";

function Welcome({ onStart }) {
  return (
    <div className="h-[80vh] flex justify-center items-center p-4">
      <div className="border-4 border-blue-500 bg-sky-100 p-10 rounded-xl max-w-lg">
        <h1 className="text-3xl font-bold text-blue-500 mb-4 text-center">
          Welcome to <br /> Guess the Word!
        </h1>
        <p className="text-xl text-blue-500 mb-8 text-center">
          The two-player word-guessing game.
        </p>

        <div className="text-left mb-8 border-t pt-2">
          <h2 className="text-2xl font-bold mb-3 text-blue-500">How it Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-500">
            <li><strong>Player 1</strong> chooses a word length and secret word.</li>
            <li><strong>Player 2</strong> has 5 attempts to guess it.</li>
          </ol>
          <div className="text-blue-500 mt-8">
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