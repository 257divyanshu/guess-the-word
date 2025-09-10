import './App.css'
import PlayGame from './pages/PlayGame/PlayGame'
import StartGame from './pages/StartGame/StartGame'
import { useState } from 'react';
import { GameContext } from './context/GameContext';
import Welcome from './components/Welcome/Welcome';

function App() {
  const [wordLength, setWordLength] = useState(false);
  const [selectedWord, setSelectedWord] = useState(false);
  const [gameState, setGameState] = useState('welcome');
  function handleWordLengthSubmission(wordLength) {
    setWordLength(wordLength);
  }

  function handleSubmission(value) {
    setSelectedWord(value);
    setGameState('playing');
  };
  return (
    <>
      <GameContext.Provider value={{ wordLength, selectedWord, handleWordLengthSubmission, handleSubmission, setGameState, setWordLength, setSelectedWord }}>
        {gameState == 'welcome' && <Welcome onStart={() => setGameState('setup')} />}
        {gameState == 'setup' && <StartGame />}
        {gameState == 'playing' && <PlayGame />}
      </GameContext.Provider>
    </>
  )
}

export default App