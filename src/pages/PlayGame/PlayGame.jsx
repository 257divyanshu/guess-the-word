import { useLocation } from "react-router-dom";
import Guess from "../../components/Guess/Guess";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import { useState } from "react";

function PlayGame() {
  const location = useLocation();
  const wordLength = location.state?.wordLength || 5;
  let wordSelected = location.state?.wordSelected;
  wordSelected = wordSelected.toUpperCase();

  // State for the current, active guess being typed
  const [currentGuess, setCurrentGuess] = useState('');

  // State to store all submitted guesses (e.g., ['HELLO', 'WORLD'])
  const [submittedGuesses, setSubmittedGuesses] = useState([]);

  let [blackChars, setBlackChars] = useState('');

  const [guessGrid, setGuessGrid] = useState([false, false, false, false, false]);
  const [guessNo, setGuessNo] = useState(0);

  const [win, setWin] = useState(false);

  function handleKeyPress(key) {
    if (win) return;
    if (key === "ENTER") {
      let newGuessGrid = [...guessGrid];
      newGuessGrid[guessNo] = true;
      setGuessGrid(newGuessGrid);
      if (currentGuess === wordSelected) {
        console.log('you have won the game');
        setWin(true);
        return;
      }
      // Only submit if the word is the correct length
      if (currentGuess.length === wordLength) {
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
      {/* Map over the grid to create each guess row */}
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

      <KeyBoard onKeyPress={handleKeyPress} blackChars={blackChars} />
    </>
  );
}

export default PlayGame;