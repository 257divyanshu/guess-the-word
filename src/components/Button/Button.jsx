import getBtnStyle from "./getBtnStyle";

function Button({btnText, btnType, btnOnClick, btnStyle}){
    return (
        <button
            className={`px-4 py-2 ${getBtnStyle(btnStyle)} text-white font-bold rounded-md transition-all`}
            type={btnType}
            onClick={btnOnClick}
        >
            {btnText}
        </button>
    )
}

export default Button;