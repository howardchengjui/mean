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

mongoose.connect('mongodb://localhost/authordB', { useNewUrlParser: true });
app.listen(8000, () => console.log("listening on port 8000"));
/////////////////////////Data///////////////////////
const AuthorSchema = new mongoose.Schema({
    name: { type: String, required:[true, " must be at least 2 characters long!"], minlength: 2 },
}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const author = mongoose.model('author', AuthorSchema);
/////////////////////////GET ALL/////////////////
app.get('/author', (req, res) => {
    author.find()
    .then(author => res.json(author))
    .catch(err => res.json(err));
})
/////////////////////GET ONE/////////////////
app.get('/author/:id', (req, res) => {
    author.findById(req.params.id)
    .then(author => res.json(author))
    .catch(err => res.json(err));
})
///////////////////////new/////////////////
app.post('/create', (req, res) => {
    console.log(req.body)
    author.create(req.body)
    .then(author => res.json(author))
    .catch(err => res.json(err));
})

////////////////remove//////////////
app.delete('/author/:id', (req, res) => {
    author.remove({_id:req.params.id})
    .then(author => res.json(author))
    .catch(err => res.json(err));
})
///////////////edit/////////////////
app.put('/author/:id', (req, res) => {
    author.findByIdAndUpdate(req.params.id, req.body,{runValidators:true})
    .then(author => res.json(author))
    .catch(err => res.json(err));
});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });