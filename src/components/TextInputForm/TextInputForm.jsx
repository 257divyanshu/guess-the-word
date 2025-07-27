import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({handleFormSubmit, textInputType, handleTextInputChange, value, setTextInputType}) {

    // console.log("TextInputForm component re-rendered")

    return (
        <form className="flex" onSubmit={handleFormSubmit}>

            <div className="mr-2 flex-1">
                <TextInput
                    inputLabel="Enter a word"
                    inputType={textInputType}
                    inputOnChange={handleTextInputChange}
                    inputValue={value}
                />
            </div>

            <div className="flex">
                <Button
                    btnText={textInputType=="password" ? "Show" : "Hide"}
                    btnOnClick={()=>{
                        setTextInputType(textInputType=="password" ? "text" : "password")
                    }}
                    btnType="button"
                >
                </Button>
            </div>

            <div className="flex">
                <Button
                    btnText="Play"
                    btnType="submit"
                >
                </Button>
            </div>

        </form>
    )
}
export default TextInputForm;