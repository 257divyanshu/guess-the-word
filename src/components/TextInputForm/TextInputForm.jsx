import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({ handleFormSubmit, textInputType, handleTextInputChange, value, setTextInputType }) {

    return (
        <form className="mx-auto flex flex-col gap-y-8 py-10 px-8 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/3 bg-white" onSubmit={handleFormSubmit}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            }}>

            <div className="">
                <TextInput
                    inputPlaceHolder={'enter the word'}
                    inputType={textInputType}
                    inputOnChange={handleTextInputChange}
                    inputValue={value}
                />
            </div>

            <div className="flex justify-center">

                <div className="mx-4 w-20">
                    <Button
                        btnText={textInputType == "password" ? "Show" : "Hide"}
                        btnOnClick={() => {
                            setTextInputType(textInputType == "password" ? "text" : "password")
                        }}
                        btnType="button"
                    >
                    </Button>
                </div>

                <div className="mx-4 w-20">
                    <Button
                        btnText="Play"
                        btnType="submit"
                    >
                    </Button>
                </div>

            </div>

        </form>
    )
}
export default TextInputForm;