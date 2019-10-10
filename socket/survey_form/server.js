///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();

const server = app.listen(8000, () => console.log("listening on port 8000"));;
const io = require('socket.io')(server);
var counter = 0;


io.on('connection', function (socket) { //2
  var random_number=Math.floor(Math.random() * 1000) + 1;
  socket.on('posting_form',function(data){
  
  socket.emit('updated_message', {users:JSON.stringify(data.post) , number:random_number }); //3
//   socket.emit('random_number', {number:random_number }); //3

 //8 (note: this log will be on your server's terminal)
  });
});
    


app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//////////////////////////////////////////////////////
// GET AND POST 
app.get('/', (req, res) => {
  res.render('index', {title: "my root route"});
});