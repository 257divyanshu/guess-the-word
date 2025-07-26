import './App.css'
import Button from './components/Button/Button'

function App() {
  return (
    <>
      <div>
        <Button
          btnText='click'
          btnType='btn'
          btnOnClick={()=>{console.log("button clicked")}}
          btnStyle='primary'
        />
      </div>
    </>
  )
}

export default App