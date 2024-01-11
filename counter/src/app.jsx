import React, { useState } from "react";

function App() {
    const [initialState, count] = useState(0);
    function increase() {
        count(initialState + 1);
        console.log(initialState);
    }
    function decrease() {
        count(initialState - 1);
        console.log(initialState);
    }
    return (
        <div className="container">
            <h1>
                {initialState}
            </h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}
export default App;