function Button({ btnText, btnType, btnOnClick, btnDisabled, btnColor='blue'}) {
    function handleClick() {
        setTimeout(btnOnClick, 400);
    };
    const colorStyles = {
    blue: 'bg-blue-500 lg:hover:bg-blue-600',
    green: 'bg-green-500 lg:hover:bg-green-600',
  };
    return (
        <button
            className={`
        px-4 py-2 ${colorStyles[btnColor]} text-white font-bold rounded-md 
        transition-all active:scale-95 w-full disabled:opacity-50 disabled:cursor-not-allowed
      `}
            type={btnType}
            onClick={handleClick}
            disabled={btnDisabled}
        >
            {btnText}
        </button>
    );
}

export default Button;