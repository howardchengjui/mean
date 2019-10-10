///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('express-flash');
const bodyParser = require("body-parser");
const path = require('path');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.json());

// app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(flash());
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(4200, () => console.log("listening on port 4200"));
/////////////////////////Data///////////////////////

/////////////////////////GET ALL/////////////////


