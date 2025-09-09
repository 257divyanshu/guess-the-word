import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayGame from './pages/PlayGame/PlayGame'
import StartGame from './pages/StartGame/StartGame'
import { useState } from 'react';
import { GameContext } from './context/GameContext';

function App() {
  const [wordLength, setWordLength] = useState();
  const [selectedWord, setSelectedWord] = useState('');
  const [gameState, setGameState] = useState('setup');
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
        {gameState == 'setup' && <StartGame />}
        {gameState == 'playing' && <PlayGame />}
      </GameContext.Provider>
    </>
  )
}

export default App