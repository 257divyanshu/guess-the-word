import { useState } from "react";

const ALPHABETS = new Array(26).fill(undefined).map((elem, index) => String.fromCharCode(65 + index));

function LetterButtons({word}){

    let [usedLetters, setUsedLetters] = useState([]);

    const originalCharacters = new Set(word.toUpperCase().split(''));

    const selectedCharacters = new Set(usedLetters.join('').toUpperCase().split(''));
    
    const buttonStyle = function(letter){
        if(selectedCharacters.has(letter)){
            if(originalCharacters.has(letter)){
                return `bg-green-600 border-green-700 hover:bg-green-700`;
            };
            return `bg-red-600 border-red-700 hover:bg-red-700`;
        }
        else{
            return `bg-blue-600 border-blue-700 hover:bg-blue-700`;
        };
    };

    function handleClick(e){
        // onLetterClick?.(e.target.value);
        setUsedLetters([...usedLetters,e.target.value]);
        console.log(usedLetters);
    }

    const buttons = ALPHABETS.map((letter) => {
        return (
            <button
                key={`button-${letter}`}
                className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(letter)}`}
                value={letter}
                onClick={handleClick}
                disabled={selectedCharacters.has(letter)}
            >
                {letter}
            </button>
        )
    })

    return (
        <>
            {buttons}
        </>
    )
}
export default LetterButtons;