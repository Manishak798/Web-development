import React from "react";
import { useState } from "react";

function App() {
    const [state, timer] = useState(new Date());
    setInterval(() => {
        timer(new Date());
    }, 1000)
    const hours = state.getHours();
    const minutes = state.getMinutes();
    const second = state.getSeconds();
    // console.log(hours + ":" + minutes + ":" + second);
    return (<div className="container">
        <h1>Digital Clock</h1>
        <div className="timedisplay">
            <div className="hours">{hours + " : "}</div>
            <div className="minute">{minutes + " : "}</div>
            <div className="second">{second}</div>
        </div>

    </div>)
}
export default App;