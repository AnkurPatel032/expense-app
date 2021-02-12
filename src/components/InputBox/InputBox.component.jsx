import React from "react";
import "./InputBox.style.css"


const InputBox=({idText,changeHandler,textValue,typeValue,placeholder})=>{
    
return(
    <div className="form-container">
       <input name={idText} className="form-control form-input " onChange={changeHandler} type={typeValue} placeholder={placeholder} value={textValue}/>
     
    </div>
);

}

export default InputBox; 