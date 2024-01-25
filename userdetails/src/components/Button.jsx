import React from "react";


const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.func} className="btn">
                {props.value}
            </button>
        </div>
    )
}
export default Buttons;