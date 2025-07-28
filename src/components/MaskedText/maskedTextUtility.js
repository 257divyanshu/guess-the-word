function getAllCharacters(word, usedLetters){
    usedLetters = usedLetters.map((letter)=>letter.toUpperCase());
    const guessedLetters = new Set(usedLetters);
    const maskedText = word.toUpperCase().split('').map((char)=>{
        if(guessedLetters.has(char)){
            return char;
        }
        else{
            return '_';
        };
    });
    return maskedText;
}

export default getAllCharacters;