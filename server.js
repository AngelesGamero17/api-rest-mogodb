const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Users  = require('./api/users');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/users", Users);

mongoose.connect(
    "mongodb://localhost/usuarios",
    {useNewUrlParser: true},
    (err,res)=> {
        err && console.log("error conectado a la bd");
        app.listen(4000,()=>{
            console.log("servidor corriendo en http://localhost:4000");
        });
    }
);