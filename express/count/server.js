const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', (req, res) => {
   if(req.session.count==undefined){
   req.session.count=1;
   console.log(req.session.count);
   }else{
   req.session.count ++}
   console.log(req.session.count);
   res.render("index",{count:req.session.count});
});

app.get('/add2',(req,res) =>{
   if(req.session.count==undefined){
      req.session.count=1;
      console.log(req.session.count);
      }else{
      req.session.count +=2}
      console.log(req.session.count);
      res.render("index",{count:req.session.count});
})

app.get('/reset',(req,res) =>{

   req.session.count=1;
   res.render("index",{count:req.session.count});
})
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));