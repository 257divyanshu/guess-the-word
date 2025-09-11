import Button from "../Button/Button";

function SelectWordLength({ onWordLengthSubmit }) {
    return (

        // the container div
        <div className="mx-auto flex flex-col gap-y-8 py-10 px-4 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/3 bg-white">

            {/* first child containing text  */}
            <div className="text-2xl font-bold text-center text-gray-800">Choose the word length</div>

            {/* second child containing the buttons */}
            <div className="flex justify-center">

                {/* the first button */}
                <div className="mx-4 w-16">
                    <Button
                        btnText={4}
                        btnType={"button"}
                        btnOnClick={() => onWordLengthSubmit(4)}
                    />
                </div>

                {/* the second button */}
                <div className="mx-4 w-16">
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