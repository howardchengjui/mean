const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cats",function(req,res){
    res.render('cats')
})
app.get("/cars",function(req,res){
    res.render('cars')
})
app.get("/",function(req,res){
    res.render('index.html')
})
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));