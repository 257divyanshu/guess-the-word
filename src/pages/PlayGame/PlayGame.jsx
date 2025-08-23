import { useLocation } from "react-router-dom";
import Guess from "../../components/Guess/Guess";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import { useState } from "react";

function PlayGame() {
  const location = useLocation();
  const wordLength = location.state?.wordLength || 5;
  
  // State for the current, active guess being typed
  const [currentGuess, setCurrentGuess] = useState('');

  // State to store all submitted guesses (e.g., ['HELLO', 'WORLD'])
  const [submittedGuesses, setSubmittedGuesses] = useState([]);
  
  function handleKeyPress(key) {
    if (key === "ENTER") {
      // Only submit if the word is the correct length
      if (currentGuess.length === wordLength) {
        setSubmittedGuesses([...submittedGuesses, currentGuess]); // Add the guess to our list
        setCurrentGuess(''); // Clear the current guess for the next line
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
  const guessGrid = Array(6).fill(null);

  return (
    <>
      {/* Map over the grid to create each guess row */}
      {guessGrid.map((_, index) => {
        const isCurrentRow = index === submittedGuesses.length;
        return (
          <Guess
            key={index}
            // If it's the current row, show the live typing. Otherwise, show a submitted guess.
            letters={isCurrentRow ? currentGuess.split('') : (submittedGuesses[index] || '').split('')}
            wordLength={wordLength}
          />
        );
      })}

      <KeyBoard onKeyPress={handleKeyPress} />
    </>
  );
}

export default PlayGame;