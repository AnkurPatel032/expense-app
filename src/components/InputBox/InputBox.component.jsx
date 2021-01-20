import React from "react";
import "./InputBox.style.css"


const InputBox=({typeValue,placeholder})=>{
return(
    <div className="form-container">
       <input className="form-input" type={typeValue} placeholder={placeholder}/>
    </div>
);

}

export default InputBox; 