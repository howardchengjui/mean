///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
const bodyParser = require("body-parser");
const path = require('path');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.json());

// app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(flash());

mongoose.connect('mongodb://localhost/restaurantDB', { useNewUrlParser: true,useUnifiedTopology: true });
app.listen(8000, () => console.log("listening on port 8000"));
/////////////////////////Data///////////////////////

const ReviewSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be at least three characters!"]},
    content: {type: String, required: [true, "Content must be at least three characters!"]},
    star:{type: Number, required: [true, "Star must be between 1 to 5"],min:1,max:5},
}, {timestamps: true})

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required:[true, " Name must be at least 3 characters long!"], minlength: 3 },
    cuisine: { type: String, required:[true, "Cuisine must be at least 3 characters long!"], minlength: 3 },
    
    review:[ReviewSchema]
}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const restaurant = mongoose.model('restaurant', RestaurantSchema);
const review = mongoose.model('review', ReviewSchema);

/////////////////////////GET ALL/////////////////
app.get('/restaurant', (req, res) => {
    restaurant.find()
    .then(restaurant => res.json(restaurant))
    .catch(err => res.json(err));
})
/////////////////////GET ONE/////////////////
app.get('/restaurant/:id', (req, res) => {
    restaurant.findById(req.params.id)
    .then(restaurant => res.json(restaurant))
    .catch(err => res.json(err));
})
///////////////////////new/////////////////
app.post('/create', (req, res) => {
    console.log(req.body)
    restaurant.create(req.body)
    .then(restaurant => res.json(restaurant))
    .catch(err => res.json(err));
})

////////////////remove//////////////
app.delete('/restaurant/:id', (req, res) => {
    restaurant.remove({_id:req.params.id})
    .then(restaurant => res.json(restaurant))
    .catch(err => res.json(err));
})
///////////////edit/////////////////
app.put('/restaurant/:id', (req, res) => {
    restaurant.findByIdAndUpdate(req.params.id, req.body,{runValidators:true})
    .then(restaurant => res.json(restaurant))
    .catch(err => res.json(err));
});

///////////////review page/////////////
// app.get('/restaurant/:id/review', (req, res) => {
//     restaurant.findById(req.params.id)
//     .then(restaurant => res.json(restaurant))
//     .catch(err => res.json(err));
// })
///////////////leave review///////////
app.post('/restaurant/:id/review', (req, res) => {
            restaurant.findByIdAndUpdate( req.params.id, {$push: {review: req.body}},{runValidators:true})
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });