const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cats",function(req,res){
    res.render('cats')
})


app.get("/ragdoll",function(req,res){
    res.render('ragdoll')
})
app.get("/garfield",function(req,res){
    res.render('garfield')
})
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log("The user id requested is:", id);
    // ...
});
app.post('/users', (req, res) => {
    req.session.name = req.body.name;
    res.redirect('/');
});

app.get('/', (req, res) => {
    console.log("Value of name in session: ", req.session.name);
    res.render('index', {title: "my root route"});
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log("The user id requested is:", id);
    // ...
});

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));