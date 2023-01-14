const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req,rep)=>{
    rep.end("<h1>BEM VINDO</h1>")
})

app.post("/teste-post", (req,rep)=>{
    let nome = req.body.name;
    let email = req.body.email;
    rep.send(nome + " - " + email);
})

app.listen(4000, ()=>{
    console.log("Server running in port 4000");
})