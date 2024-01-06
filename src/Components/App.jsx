import React from "react";
import Card from "./pizzacard";
import Heading from "./header";
import Pizza from "./data";
function pizaaprop(pizzaitem) {
    return (<Card
        id={pizzaitem.id}
        name={pizzaitem.name}
        toppings={pizzaitem.toppings}
        size={pizzaitem.size}
        price={pizzaitem.price}
    />);
}
function App() {
    return (
        <div>
            <Heading />
            {Pizza.map(pizaaprop)}
        </div>
    );
}
export default App;// in react naming convention is must it uses capital case for first letter