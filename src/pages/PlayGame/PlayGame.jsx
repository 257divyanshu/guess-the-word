// import { useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Guess from "../../components/Guess/Guess";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import { useContext, useState } from "react";
import WinModal from "../../components/WinModal/WinModal";
import LossModal from "../../components/LossModal/LossModal";
import HowToPlayModal from "../../components/HowToPlay/HowToPlay";
import { GameContext } from "../../context/GameContext";

function PlayGame() {

  const { wordLength, selectedWord, setGameState, setWordLength, setSelectedWord } = useContext(GameContext)
  let correctWord = selectedWord.toUpperCase();

  // State for the current, active guess being typed
  const [currentGuess, setCurrentGuess] = useState('');

  // State to store all submitted guesses (e.g., ['HELLO', 'WORLD'])
  const [submittedGuesses, setSubmittedGuesses] = useState([]);

  let [blackChars, setBlackChars] = useState('');
  const [guessGrid, setGuessGrid] = useState([false, false, false, false, false]);
  const [guessNo, setGuessNo] = useState(0);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  function handleRestart() {
    setGameState('setup');
    setWordLength(false);
    setSelectedWord(false);
  }

  function handleKeyPress(key) {

    if (win) return;

    if (key === "ENTER") {
      // Only submit if the word is the correct length
      if (currentGuess.length === wordLength) {
        setSubmittedGuesses([...submittedGuesses, currentGuess]); // Add the guess to our list
        setCurrentGuess(''); // Clear the current guess for the next line
        let blackCharsToAdd = '';
        for (let i = 0; i < wordLength; i++) {
          if (!correctWord.includes(currentGuess[i])) {
            blackCharsToAdd += currentGuess[i];
          };
        };
        setBlackChars(blackChars + blackCharsToAdd);
        setGuessNo(guessNo + 1);
        let newGuessGrid = [...guessGrid];
        newGuessGrid[guessNo] = true;
        setGuessGrid(newGuessGrid);
        if (currentGuess === correctWord) {
          setTimeout(() => {
            setWin(true);
          }, 1000);
        }
        else if (guessNo == 4) {
          setTimeout(() => {
            setLoss(true);
          }, 1000);
        }
      }
      return; // Stop further execution
    }

    if (key === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1)); // Remove the last letter
      return;
    }
    // Add the new letter if the current guess isn't full
    if (currentGuess.length < wordLength) {
      setCurrentGuess(currentGuess + key);
    }
  }

  return (
    <>

      <header className="flex justify-end p-4">
        <button
          onClick={() => setShowHelp(true)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-2 rounded flex items-center"
        >
          <img
            src="/info.svg"
            alt="Info icon"
            className=" w-5 h-5" // Set a size for your icon
          />
          <span className=" ml-2">How to Play</span>
        </button>
      </header>

      {/* Map over the grid to create each guess row */}
      <div className={`transition-all duration-300 ${win || loss || showHelp ? 'blur-[2px]' : ''} m-1`}>
        <div className=" m-2 mb-6 flex flex-col items-center">
          {guessGrid.map((elem, index) => {
            const isCurrentRow = index === submittedGuesses.length;
            return (
              <Guess
                key={index}
                // If it's the current row, show the live typing. Otherwise, show a submitted guess.
                letters={isCurrentRow ? currentGuess.split('') : (submittedGuesses[index] || '').split('')}
                wordLength={wordLength}
                filled={elem}
                blackChars={blackChars}
              />
            );
          })}
        </div>
        <KeyBoard onKeyPress={handleKeyPress} blackChars={blackChars} />
      </div>
      {win && <WinModal onRestart={handleRestart} word={correctWord} />}
      {loss && <LossModal onRestart={handleRestart} word={correctWord} />}
      {showHelp && <HowToPlayModal onClose={() => setShowHelp(false)} />}
    </>
  );
}

export default PlayGame;