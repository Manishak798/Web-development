import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
const Posts = (props) => {
    return (
        <div>{props.title}</div>

    )
}

function App() {
    const [items, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return (response.json());// Return the result of response.json()
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1>React Routes</h1>
            <Routes>
                <Route path="/posts" element={<Posts title={items.map((posts) => (<li className="posttitle">{posts.title}</li>))} />} />

                <Route />
            </Routes>
        </div>
    );
}
export default App;