import React from "react";
function Usercard(props) {
    return (
        <div className="card-container">
            <img className="uimg" src={props.img} alt="userimg" />
            <h2>{props.username}</h2>
            <h3>{props.userphonenumber}</h3>
            <p>{props.useraddress}</p>
        </div>
    )
}
export default Usercard;