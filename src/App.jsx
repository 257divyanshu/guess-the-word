import './App.css'
import Button from './components/Button/Button'
import TextInput from './components/TextInput/TextInput'

function App() {
  return (
    <>
      <div>
        <TextInput
          inputLabel={'enter a word'}
          inputType={'text'}
          // inputValue={'abcd'}
          inputOnChange={()=>{console.log("input changed")}}
        />
      </div>
    </>
  )
}

export default App