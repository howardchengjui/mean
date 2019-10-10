///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('express-flash');

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

mongoose.connect('mongodb://localhost/name_of_your_db', {useNewUrlParser: true});

app.listen(8000, () => console.log("listening on port 8000"));
/////////////////////////Data///////////////////////
const PeopleSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name can't be empty!"], minlength: 1 },
}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const people = mongoose.model('People', PeopleSchema);
/////////////////////////GET ALL/////////////////
app.get('/', (req,res) => {
    people.find({})
    .then(people => res.json(people))
    .catch(err => res.json(err));
})
///////////////////////new/////////////////
app.get('/new/:name', (req, res) => {
    var newperson = new people();
    newperson.name=req.params.name
    newperson.save()
    .then(newperson =>res.json(newperson))
    .catch(err => {
        for (var key in err.errors) {
            req.flash(key, err.errors[key].message);
        }
        res.redirect('/');
    })
})
///////////////////show//////////////////
app.get("/:name", (req, res) => {
    people.findOne({name:req.params.name})
    .then(people => res.json(people))
    .catch(err => res.json(err));
})
////////////////remove//////////////
app.get('/remove/:name',(req,res)=>{
    const { name } = req.params;
    people.remove({name:name})
    .then(deletedPerson => {
        res.redirect('/');
    })
    .catch(err => res.json(err));
})




