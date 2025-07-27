import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayGame from './pages/PlayGame/PlayGame'
import StartGame from './pages/StartGame/StartGame'

function App() {
  return (
    <>
      <Routes>
        <Route path='/play' element={<PlayGame/>}/>  
        <Route path='/start' element={<StartGame/>}/>  
        <Route path='*' element={<div>not found</div>}/>
      </Routes>      
    </>
  )
}

export default App