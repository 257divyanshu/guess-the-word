import './App.css'
import PlayGame from './pages/PlayGame/PlayGame'
import StartGame from './pages/StartGame/StartGame'
import Welcome from './components/Welcome/Welcome';
import { useState } from 'react';
import { GameContext } from './context/GameContext';

/**
 * The main component of the application.
 * It manages the overall game state and renders different pages based on that state.
 * It also provides a global context for game data to be shared across components.
 */
function App() {

  // Stores the desired length of the word to be guessed. Initially false.
  const [wordLength, setWordLength] = useState(false);

  // Stores the actual word supplied by Player1 which is to be guessed by Player2. Initially false.
  const [selectedWord, setSelectedWord] = useState(false);

  // Manages the current phase of the game. Can be 'welcome', 'setup', or 'playing'.
  const [gameState, setGameState] = useState('welcome');

  /**
   * Sets the word length chosen by the user in the setup phase.
   * @param {number} wordLength - The length of the word.
   */
  function handleWordLengthSubmission(wordLength) {
    setWordLength(wordLength);
  }

  /**
   * Sets the word to be guessed and transitions the game state to 'playing'.
   * This is called after the user submits the word in the setup phase.
   * @param {string} value - The word to be guessed.
   */
  function handleSubmission(value) {
    setSelectedWord(value);
    setGameState('playing');
  };

  return (
    
    <>

      {/* GameContext.Provider makes game state and handler functions available
        to all descendant components, avoiding the need for prop drilling.
      */}
      <GameContext.Provider value={{
        wordLength,
        selectedWord,
        handleWordLengthSubmission,
        handleSubmission,
        setGameState,
        setWordLength,
        setSelectedWord
      }}>

        {/* Conditionally render components based on the current gameState */}
        {gameState == 'welcome' && <Welcome onStart={() => setGameState('setup')} />}
        {gameState == 'setup' && <StartGame />}
        {gameState == 'playing' && <PlayGame />}

      </GameContext.Provider>

    </>

  )

}

export default App