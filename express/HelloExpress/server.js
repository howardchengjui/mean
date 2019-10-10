const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + "/static"));
// app.get('/', (request, response) => {
//    response.render("Hello Express");
// });

app.get('/cars.html',function(req,res){
    res.render('cars.html')
})
app.get('/cats.html',function(req,res){
    res.render('cats.html')
})
app.get('/',function(req,res){
    res.render('main')
})

app.get("/users", (req, res) => {
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.listen(8000, () => console.log("listening on port 8000"));