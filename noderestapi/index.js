import Express from "express";
import fs from "fs";
import data from "./MOCK_DATA.json" assert { type: 'json' };//Node.js expects you to provide an import assertion to specify the type of the module being imported.
const app = Express();
const PORT = 8000;

app.use(Express.urlencoded({ extended: false }));//post k liye jb user ne data dala body me xxx.urlencoded me to yeh use json format me lake dega
/*get route*/
app.get("/users/info", (req, res) => {
    const users = data.map(user => user.first_name).join(" ");
    res.json(users);
})
app.get("/users/details", (req, res) => {
    const users = data.map(user => (
        `<strong>first_name: ${user.first_name}</strong><br>
        last_name: ${user.last_name}<br>
        email:${user.email}<br>
        job_title: ${user.job_title}<br>
        gender: ${user.gender}<br>`
    ));

    res.send(`<ul>${users}</ul>`);
});
app.post("/users/api", (req, res) => {
    const body = req.body;
    const uid = data.length + 1;
    data.push({
        id: uid,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender
    });//data file me dalna hai hume mock data me to fs module use hoga
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (data, err) => {
        return res.json(data);
    })
});
app
    .route("/users/:id")
    .put((req, res) => {
        const uid = req.params;
        const users = data.filter((user) => user.id === uid)
        res.json(users);
    })
    .delete((req, res) => {
        const users = data.map(user => user.first_name).join(" ");
        res.json(users);
    })
app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
})
