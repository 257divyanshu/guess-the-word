import Guess from "../../components/Guess/Guess";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import { useContext, useState } from "react";
import WinModal from "../../components/WinModal/WinModal";
import LossModal from "../../components/LossModal/LossModal";
import HowToPlayModal from "../../components/HowToPlay/HowToPlay";
import { GameContext } from "../../context/GameContext";

/**
 * The main component for the gameplay screen.
 * It manages the entire game loop, including user input, state updates,
 * and rendering of the guess grid, keyboard, and result modals.
 */
function PlayGame() {

  // GLOBAL STATE from Context
  // -------------------------

  const { wordLength, selectedWord, setGameState, setWordLength, setSelectedWord } = useContext(GameContext)
  const correctWord = selectedWord.toUpperCase();

  // COMPONENT-LEVEL STATE
  // ---------------------

  // The current, active guess being typed by the user.
  const [currentGuess, setCurrentGuess] = useState('');

  // An array of all previously submitted guesses (e.g., ['HELLO', 'WORLD']).
  const [submittedGuesses, setSubmittedGuesses] = useState([]);

  // A string containing all letters confirmed to be NOT in the word, used to color the keyboard.
  let [blackChars, setBlackChars] = useState('');

  // An array tracking the "filled" state of each guess row.
  const [guessGrid, setGuessGrid] = useState([false, false, false, false, false]);

  // The current attempt number (0-4, for 5 total guesses).
  const [guessNo, setGuessNo] = useState(0);

  // Flags to control the visibility of win, loss, and help modals.
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // GAME FLOW FUNCTIONS
  // -------------------

  /**
   * Resets the game state to its initial values and navigates back to the setup screen.
   * This function is passed as a prop to the Win/Loss modals.
   */
  function handleRestart() {
    setGameState('setup');
    setWordLength(false);
    setSelectedWord(false);
  }

  /**
   * The core input handler for the game, processing virtual keyboard presses.
   * @param {string} key - The character of the key that was pressed (e.g., 'A', 'ENTER', 'BACKSPACE').
   */
  function handleKeyPress(key) {

    // Prevent any input if the game is already won.
    if (win) return;

    // --- SUBMIT GUESS ---
    if (key === "ENTER") {

      // Only submit if the word is of correct length
      if (currentGuess.length === wordLength) {

        setSubmittedGuesses([...submittedGuesses, currentGuess]); // Add the guess to our list
        setCurrentGuess(''); // Clear the current guess for the next line.

        // Identify and collect letters from the guess that are not in the correct word.
        let blackCharsToAdd = '';
        for (let i = 0; i < wordLength; i++) {
          if (!correctWord.includes(currentGuess[i])) {
            blackCharsToAdd += currentGuess[i];
          };
        };
        setBlackChars(blackChars + blackCharsToAdd);

        // Advance the game to the next turn.
        setGuessNo(guessNo + 1);
        let newGuessGrid = [...guessGrid];
        newGuessGrid[guessNo] = true; // Mark the current row as "filled".
        setGuessGrid(newGuessGrid);

        // --- CHECK WIN/LOSS CONDITIONS ---
        if (currentGuess === correctWord) {
          setTimeout(() => setWin(true), 1000);
        }
        else if (guessNo == 4) { // Check if it was the last guess (0-indexed).
          setTimeout(() => setLoss(true), 1000);
        }

      }

      return; // Stop further execution after handling ENTER.

    }

    // --- REMOVE LETTER ---
    if (key === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1)); // Remove the last letter
      return;
    }

    // --- ADD LETTER ---
    if (currentGuess.length < wordLength) {
      setCurrentGuess(currentGuess + key);
    }

  }

  return (

    <>

      <header className="flex justify-end p-4">
        <button
          onClick={() => setShowHelp(true)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded flex items-center"
        >
          <img src="/info.svg" alt="Info icon" className="w-5 h-5" />
          <span className="ml-2">How to Guess</span>
        </button>
      </header>

      {/* Main game container. A blur effect is applied when any modal is active. */}
      <div className={`mt-10 transition-all duration-300 ${win || loss || showHelp ? 'blur-[2px]' : ''} m-1`}>
        <div className=" m-2 mb-6 flex flex-col items-center">
          {/* Render the 5 rows of the guess grid. */}
          {guessGrid.map((elem, index) => {
            const isCurrentRow = index === submittedGuesses.length;
            return (
              <Guess
                key={index}
                // If it's the current active row, show the live typed guess.
                // Otherwise, show a previously submitted guess from the history.
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

      {/* Conditionally render modals based on game state. */}
      {win && <WinModal onRestart={handleRestart} word={correctWord} />}
      {loss && <LossModal onRestart={handleRestart} word={correctWord} />}
      {showHelp && <HowToPlayModal onClose={() => setShowHelp(false)} />}

    </>

  );
  
}

export default PlayGame;