import React from "react";
import "./ActionButton.style.css";

const ActionButton = ({ buttonText, clickHandler }) => {
    return (<div>
 <div class="col-md-12">
        <button onClick={clickHandler} className="btn btn-primary">{buttonText}</button>
        </div>
    </div>);
}

export default ActionButton;

