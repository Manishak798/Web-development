import React from "react";
import Reactdom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = Reactdom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)