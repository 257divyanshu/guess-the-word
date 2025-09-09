import { useLocation, useNavigate } from "react-router-dom";
import Guess from "../../components/Guess/Guess";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import { useState } from "react";
import WinModal from "../../components/WinModal/WinModal";
import LossModal from "../../components/LossModal/LossModal";
import HowToPlayModal from "../../components/HowToPlay/HowToPlay";

function PlayGame() {
  const location = useLocation();
  const wordLength = location.state?.wordLength || 5;
  let wordSelected = location.state?.wordSelected;
  wordSelected = wordSelected.toUpperCase();

  const navigate = useNavigate(); // 3. Initialize navigate

  // State for the current, active guess being typed
  const [currentGuess, setCurrentGuess] = useState('');

  // State to store all submitted guesses (e.g., ['HELLO', 'WORLD'])
  const [submittedGuesses, setSubmittedGuesses] = useState([]);

  let [blackChars, setBlackChars] = useState('');

  const [guessGrid, setGuessGrid] = useState([false, false, false, false, false]);
  const [guessNo, setGuessNo] = useState(0);

  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);

  const [showHelp, setShowHelp] = useState(false); // 2. Add state for the help modal

  function handleRestart() {
    navigate('/start');
  }

  function handleKeyPress(key) {

    if (win) return;

    if (key === "ENTER") {
      // Only submit if the word is the correct length
      if (currentGuess.length === wordLength) {
        console.log(guessGrid);
        console.log(guessNo);
        setSubmittedGuesses([...submittedGuesses, currentGuess]); // Add the guess to our list
        setCurrentGuess(''); // Clear the current guess for the next line
        let blackCharsToAdd = '';
        for (let i = 0; i < wordLength; i++) {
          if (!wordSelected.includes(currentGuess[i])) {
            blackCharsToAdd += currentGuess[i];
          };
        };
        setBlackChars(blackChars + blackCharsToAdd);
        setGuessNo(guessNo + 1);
        let newGuessGrid = [...guessGrid];
        newGuessGrid[guessNo] = true;
        setGuessGrid(newGuessGrid);
        if (currentGuess === wordSelected) {
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
      console.log("BACKSPACE clicked");
      setCurrentGuess(currentGuess.slice(0, -1)); // Remove the last letter
      return;
    }

    // Add the new letter if the current guess isn't full
    if (currentGuess.length < wordLength) {
      setCurrentGuess(currentGuess + key);
    }
  }

  // Create an array for all 6 guess rows
  // const guessGrid = Array(6).fill(null);

  return (
    <>

      <header className="flex items-center justify-between p-4">
        <button
          onClick={() => setShowHelp(true)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          How to Play
        </button>
      </header>

      {/* Map over the grid to create each guess row */}
      <div className={` transition-all duration-300 ${win || loss || showHelp ? 'blur-[2px]' : ''} m-1 mt-8`}>
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
      {win && <WinModal onRestart={handleRestart} word={wordSelected} />}
      {loss && <LossModal onRestart={handleRestart} word={wordSelected} />}
      {showHelp && <HowToPlayModal onClose={() => setShowHelp(false)} />}
    </>
  );
}

export default PlayGame;