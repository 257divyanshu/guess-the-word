function getBtnStyle(btnStyle){
    const primary = "bg-blue-500 hover:bg-blue-700";
    const secondary = "bg-gray-500 hover:bg-gray-700";
    const warning = "bg-yellow-500 hover:bg-yellow-700";
    if(btnStyle==="primary"){
        return primary;
    }
    else if(btnStyle==="secondary"){
        return secondary;
    }
    else if(btnStyle==="warning"){
        return warning;
    }
    else{
        return primary;
    };
}

export default getBtnStyle;