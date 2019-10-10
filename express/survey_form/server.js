///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();
const session = require('express-session');
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

app.listen(8000, () => console.log("listening on port 8000"));
//////////////////////////////////////////////////////
// GET AND POST 
app.get('/', (req, res) => {
  res.render('index', {title: "my root route"});
});
app.post('/result', (req, res) => {
    var user = req.body;
    res.render('result',{user:user})
  // do stuff
});
// REDIRECT
