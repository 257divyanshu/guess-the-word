import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'

function App() {
  return (
    <>
      <div>
        <TextInputFormContainer onFormSubmit={(v)=>{
          console.log(`form submitted with value ${v}`)
          }}/>
      </div>
    </>
  )
}

export default App