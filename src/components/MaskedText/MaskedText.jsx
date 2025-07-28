import getAllCharacters from "./maskedTextUtility";

function MaskedText({word, usedLetters}){
    const letters = getAllCharacters(word, usedLetters);
    return (
        <>
            {letters.map((letter,index)=>{
                return (
                    <span
                        key={`letter-${index}`}
                        className="inline-block mx-1"
                    >
                        {letter}
                    </span>
                )
            })}
        </>
    )
}
export default MaskedText;