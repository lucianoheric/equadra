const express = require("express");
const app = express();
app.use(express.json());
const user = require("./models/user")




app.get("/", (req,rep)=>{
    rep.end("<h1>BEM VINDO</h1>")
})

app.get("/user", (req,rep)=>{
    const ret_user = user.selectAllUser;
    rep.end(user.selectAllUser[0]);
})

app.post("/teste-post", (req,rep)=>{
    let nome = req.body.name;
    let email = req.body.email;

    let output = "<label for='name'>Informe o nome: </label>"+
    "<input type='text' id='name' name='name' required"+
    " minlength='4' maxlength='8' size='10'></input>";
    rep.send(output);
})


app.listen(4000, ()=>{

    (async () => {
        const db = require("./models/user");
        console.log('Começou!');
     
        console.log('SELECT * FROM CLIENTES');
        const users = await db.selectAllUser();
        console.log(users);
    })();
       
    console.log("Server running in port 4000");
})




