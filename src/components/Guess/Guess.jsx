// A single styled letter box
function Letter({ value }) {
  return (
    <div
      className="
        h-12 w-12 mx-[3px] my-[0px] flex items-center justify-center 
        bg-slate-600 rounded-md shadow-md
        text-white text-2xl font-bold
      "
    >
      {/* Render a non-breaking space if the value is empty to maintain height */}
      {value || '\u00A0'}
    </div>
  );
}

// The main component to display a row of letters
function Guess({ letters = [], wordLength = 5 }) { // Default to 5 for safety
  // Create an array with a fixed length, filled with the provided letters
  const displayLetters = new Array(wordLength)
    .fill(null)
    .map((_, index) => letters[index].toUpperCase() || null);

  return (
    <div className="flex justify-center my-1">
      {displayLetters.map((letter, index) => (
        <Letter key={index} value={letter} />
      ))}
    </div>
  );
}

export default Guess;