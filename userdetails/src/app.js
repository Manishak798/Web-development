import React, { useState, useEffect } from "react";
import "./main.css"
import Buttons from "./components/Button";

const App = () => {
    const [initialState, setState] = useState(" ");
    const [items, setitem] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${initialState}`)
            .then((response) => response.json())
            .then(json => setitem(json));
        console.log("mounted");

        return () => {
            console.log("unmounted");
        };
    }, [initialState])

    return (
        <>
            <div className="container">
                <Buttons func={() => { setState('Posts') }} value={"Post"} />
                <Buttons func={() => { setState('Users') }} value={"User"} />
                <Buttons func={() => { setState('Comment') }} value={"Comment"} />

            </div>
            <h1>{initialState}</h1>
            {items.map(item => {
                return <pre> {JSON.stringify(item)}</pre>
            })}
        </>


    )

}

export default App;