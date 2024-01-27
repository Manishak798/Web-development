import React, { useEffect, useState } from "react";
import "./app.css"
import { userdata } from "./api/Api";
import Usercard from "./components/Usercard";
// import { response } from "express"
function App() {
    const [data, setData] = useState("");
    useEffect(() => {
        userdata().then((info) => { setData(info) })
    }, [])
    function refreshimg() {
        userdata().then((info) => { setData(info) })
    }
    return (
        <>
            {data ? <div>
                <Usercard img={data.results[0].picture.medium} username={data.results[0].name.first + " " + data.results[0].name.last} userphonenumber={data.results[0].phone} useraddress={data.results[0].location.city} />
                {console.log(data.results[0].picture.medium)}
            </div> : <p> No Data found</p>}
            {/* <div>
                <Usercard img={data.results[0].picture.medium} username={data.results[0].name.first + " " + data.results[0].name.last} userphonenumber={data.results[0].phone} useraddress={data.results[0].location.city} />
                {console.log(data.results[0].picture.medium)}
            </div> */}

            <button className="btn" onClick={refreshimg}> Get New User</button>
        </>
    )
}

export default App;
