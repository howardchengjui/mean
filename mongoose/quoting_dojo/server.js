///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const moment = require('moment');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
const flash = require('express-flash');
const body_parser = require('body-parser');
app.use(flash());
mongoose.connect('mongodb://localhost/quoteDB', { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(8000, () => console.log("listening on port 8000"));
////////////////////Data////////////////////////
const QuoteSchema = new mongoose.Schema({
    quoted_by: { type: String, required: [true, "Quoter name can't be empty!"], minlength: 1 },
    comment: { type: String, required: [true, "Comment must exist!"], minlength: 1 }
}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);
////////////////////GET/////////////////////////
app.get('/', (req, res) => {
    res.render('index', { title: "my root route" });
});
/////////////////POST////////////////////////
app.post('/process', (req, res) => {
    const quote = new Quote(req.body);
    quote.save()
        .then(() => res.redirect('/quotes'))
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash(key, err.errors[key].message);
            }
            res.redirect('/');
        });
});
/////////////////all_quotes////////////////////
app.get('/quotes', (req, res) => {
    Quote.find()
        .then(quotes => {
        res.render('result', { quotes: quotes, moment: moment })
        })
         .catch(err => res.json(err));
})