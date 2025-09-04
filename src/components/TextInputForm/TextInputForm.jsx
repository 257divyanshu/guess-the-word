import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({ handleFormSubmit, textInputType, handleTextInputChange, value, setTextInputType }) {

    return (
        <form className="border-4 border-blue-500 mt-10 mx-auto flex flex-col gap-y-8 py-6 px-4 rounded-lg w-4/5 md:w-1/2 lg:w-1/3 bg-sky-100" onSubmit={handleFormSubmit}>

            <div className="">
                <TextInput
                    inputPlaceHolder={'ENTER THE WORD'}
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