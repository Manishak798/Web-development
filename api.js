
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 8000;
const masterkey = "1234MK";//an authentication key to access API data
app.use(bodyParser.urlencoded({ extended: true }));
var pizza = [
    {
        "id": 1,
        "name": "Mozerella",
        "toppings": "Double cheese",
        "price": 99.9
    },
    {
        "id": 2,
        "name": "VegPizza",
        "toppings": "cheese, capsicum, onion, tomato",
        "price": 199
    },
    {
        "id": 3,
        "name": "NonVegPizza",
        "toppings": "cheese, chicken, pepperoni",
        "price": 99
    }
]
app.get('/random', (req, res) => {
    const generateRandomPizza = Math.floor(Math.random() * (pizza.length));

    res.json(pizza[generateRandomPizza]);
    //console.log(Math.floor(Math.random() * (pizza.pizzaName.id)));
});
app.get('/filter', (req, res) => {
    const type = req.query.type;//in query pram write type = use this only
    console.log(type);
    const filterType = pizza.filter((pizzaa) =>
        pizzaa.name === type
        //pizzaa is a name given to our object a random name
    );
    console.log(filterType);
    res.json(filterType);
});
//const finder = pizza.filter(pizza.name);
app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const value = pizza.find((pizzaa) => pizzaa.id === id);
    console.log(value);
    res.json(value);
});
//adding a new pizza to list by a client
app.post("/pizza", (req, res) => {
    const newPizza = {
        id: pizza.length + 1,
        name: req.body.name,
        toppings: req.body.toppings,
        price: parseInt(req.body.price)
    };
    pizza.push(newPizza);
    console.log(pizza.slice(-1));
    res.json(newPizza);
    //body->urlencoded fir value dalo then post it
});
//put request for replacement of existing data
app.put('/pizza/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const replacementPizza = {
        toppings: req.body.toppings,
        //I want toppings to be replaced
    }
    const searchPizza = pizza.findIndex((pizzaa) => pizzaa.id === id);
    pizza[searchPizza] = replacementPizza;
    res.json(replacementPizza);
});
//patch req for changing a small piece of data in the existing file like patches
app.patch('/pizza/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const replacementPizza = {
        //I want pizza name to be updated according to the toppings
        id: pizza.id,
        name: req.body.name || existingPizza.name,//If the name property is null than the existing one eill be there
    }
    const searchPizza = pizza.findIndex((pizzaa) => pizzaa.id === id);
    pizza[searchPizza] = replacementPizza;
    res.json(replacementPizza);
});
//deleting a single obj or data from database
app.delete('/pizza/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const searchPizza = pizza.findIndex((pizzaa) => pizzaa.id === id);
    if (searchPizza > (-1)) {
        pizza.splice(searchPizza, 1);//splice method remove the pizza element with that index that is stored in id here one is for only one time
        res.json("OK");
    } else {
        res
            .status(404)
            .json(`Requested id: ${id} not FOUND!, No data is Deleted.`);

    }

});
//deleting entire databse for that I need to have a master key to check for authentication
app.delete("/all", (req, res) => {
    const APIKey = req.query.APIKey;
    if (APIKey === masterkey) {
        //pizza=[] setting pizza array empty will wipe out everything
        res.json("Sucessfully Deleted!!");
    } else {
        res
            .status(404)
            .json(`API Key value ${APIKey} is incorrect, You are not authorized to access that.`);
    }
});
app.listen(port, (req, res) => {
    console.log(`Server started on ${port}`);
})
