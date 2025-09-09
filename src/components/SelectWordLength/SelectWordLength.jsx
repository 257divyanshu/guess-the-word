import Button from "../Button/Button";

function SelectWordLength({ onWordLengthSubmit }) {
    return (

        // the container div
        <div className="border-4 border-blue-500 mx-auto flex flex-col gap-y-8 py-6 px-4 rounded-lg w-4/5 md:w-1/2 lg:w-1/3 bg-sky-100">

            {/* first child containing text  */}
            <div className="text-2xl font-bold text-center text-blue-500">Choose the word length</div>

            {/* second child containing the buttons */}
            <div className="flex justify-center">

                {/* the first button */}
                <div className="mx-4 w-20">
                    <Button
                        btnText={4}
                        btnType={"button"}
                        btnOnClick={() => onWordLengthSubmit(4)}
                    />
                </div>

                {/* the second button */}
                <div className="mx-4 w-20">
                    <Button
                        btnText={5}
                        btnType={"button"}
                        btnOnClick={() => onWordLengthSubmit(5)}
                    />
                </div>

            </div>

        </div>
    )
}
export default SelectWordLength;