function TextInput({inputLabel, inputType="text", inputValue, inputOnChange}){
    return (
        <label>
            {inputLabel && <span>{inputLabel}</span>}
            <input
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
                onChange={inputOnChange}
                placeholder={inputLabel}
                type={inputType}
                value={inputValue}
            />
        </label>
    )
}

export default TextInput;