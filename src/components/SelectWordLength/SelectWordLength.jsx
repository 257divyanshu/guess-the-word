import Button from "../Button/Button";

function SelectWordLength({onWordLengthSubmit}){
    return (
        <>
            <div>Choose the word length</div>
            <Button
                btnText={4}
                btnType={"button"}
                btnOnClick={()=>onWordLengthSubmit(4)}            
            />
            <Button
                btnText={5}
                btnType={"button"}
                btnOnClick={()=>onWordLengthSubmit(5)}            
            />
        </>
    )
}
export default SelectWordLength;