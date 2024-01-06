import React from "react";
function Card(props) {
    return (
        <div className="container">
            <div className="card">
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2023/04/11/15/13/ai-generated-7917499_1280.jpg" alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.toppings}</li>
                    <li className="list-group-item">{props.size}</li>
                    <li className="list-group-item">{props.price}</li>
                </ul>
            </div>
        </div>
    );
}
export default Card;