import React, { useState } from "react";
function App() {
    const [isMouseover, setmouseOver] = useState(false);
    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");

    function inpvalue(name) {
        setName(name.target.value);
    }
    function handleClick(event) {
        setHeading(name);
        event.preventDefault();
    }
    function handleMouseOver() {
        setmouseOver(true)
    }
    function handleMouseOut() {
        setmouseOver(false)
    }
    return (<div className="container">
        <h1>Helloo {headingText}</h1>
        <form onSubmit={handleClick}>
            <div >
                <input className="input" onChange={inpvalue} type="text" placeholder="What is your Name?" name="name"></input>
            </div>
            <div >
                <button
                    onClick={handleClick}
                    style={{ backgroundColor: isMouseover ? "#dcdde1" : "white" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut} className="btn" type="submit">Submit</button>
            </div>
        </form>
    </div>)
}
export default App;