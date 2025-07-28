function getAllCharacters(word, guessedLetters){
    guessedLetters = guessedLetters.map((letter)=>letter.toUpperCase());
    const correctlyGuessedLetters = new Set(guessedLetters);
    const maskedText = word.toUpperCase().split('').map((char)=>{
        if(correctlyGuessedLetters.has(char)){
            return char;
        }
        else{
            return '_';
        };
    });
    return maskedText;
}

export default getAllCharacters;