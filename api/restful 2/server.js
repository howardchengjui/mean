///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('express-flash');
const bodyParser = require("body-parser");

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

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(flash());

mongoose.connect('mongodb://localhost/name_of_your_db', { useNewUrlParser: true });

app.listen(8000, () => console.log("listening on port 8000"));
/////////////////////////Data///////////////////////
const TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean, default: false },
}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const task = mongoose.model('Task', TaskSchema);
/////////////////////////GET ALL/////////////////
app.get('/', (req, res) => {
    task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
})
///////////////////////new/////////////////
app.post('/new', (req, res) => {
    console.log(req.body)
    task.create(req.body)

        .then(task => res.json(task))
        .catch(err => res.json(err));
})
///////////////////show//////////////////
app.get("/:id", (req, res) => {
    task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.json(err));
})
////////////////remove//////////////
app.get('/remove/:id', (req, res) => {
    task.remove({_id:req.params.id})
        .then(task => res.json(task))
        .catch(err => res.json(err));
})
///////////////edit/////////////////
app.put('/edit/:id', (req, res) => {
    task.findByIdAndUpdate(req.params.id, req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err));
});
