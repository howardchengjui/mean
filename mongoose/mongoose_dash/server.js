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
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(flash());

mongoose.connect('mongodb://localhost/mongoose_dash', {useNewUrlParser: true});

app.listen(8000, () => console.log("listening on port 8000"));
////////////////////Data////////////////////////
const AnimalSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name can't be empty!"], minlength: 1 },
    animal: { type: String, required: [true, "Animal type must exist!"], minlength: 1 }
}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const Animal = mongoose.model('animal', AnimalSchema);
//////////////////////////GET AND POST /////////////////////////
///////////////////get all//////////////////////
app.get('/', (req, res) => {
    Animal.find()
    .then(animals => {
        res.render('index',{animals:animals})
    })
    .catch(err => res.json(err));
});
//////////////////////////new/////////////////////////
app.get('/new', (req, res) => {
    res.render("new");
});
////////////////////////create//////////////////////
app.post('/create', (req, res) => {
    const animal = new Animal(req.body);
    animal.save()
    .then(newAnimal => res.redirect('/animal/'+newAnimal._id))
    .catch(err => {
        for (var key in err.errors) {
            req.flash(key, err.errors[key].message);
        }
        res.redirect('/new');
    });
});
///////////////////////show one///////////////////////
app.get("/animal/:id", (req, res) => {
    const { id } = req.params;
    console.log("The user id requested is:", id);
    Animal.findOne({_id:id})
    .then(animal => {
        res.render("show",{animal:animal})
    })
    .catch(err => res.json(err))
})
///////////////////////edit page//////////////////
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    console.log("The user id requested is:", id);
    Animal.findOne({_id:id})
    .then(animal => {
        res.render("edit",{animal:animal})
    })
    .catch(err => res.json(err))
})
/////////////////////update///////////////
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    Animal.findOne({_id:id})
        .then(animal => {
            animal.name = req.body.name;
            animal.animal = req.body.animal;
            animal.save()
            .then(()=>res.redirect("/"))
            .catch(err => {
                for (var key in err.errors) {
                    req.flash(key, err.errors[key].message);
                }
                res.redirect('/edit/'+id);
            });
        })
        .catch(err => {
            for (var key in err.errors) {
                req.flash(key, err.errors[key].message);
            }
            res.redirect('/edit'+id);
        });
});
//////////////////delete//////////////////
app.get('/delete/:id',(req,res)=>{
    const { id } = req.params;
    Animal.remove({_id:id})
        .then(deletedAnimal => {
            res.redirect("/");
        })
        .catch(err => res.json(err));
})
