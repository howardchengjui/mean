///////////////////// EXPRESS SERVER /////////////////
const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('express-flash');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(flash());

mongoose.connect('mongodb://localhost/name_of_your_db', { useNewUrlParser: true });

app.listen(8000, () => console.log("listening on port 8000"));
/////////////////////////Data///////////////////////
const PostSchema = new mongoose.Schema({
    commenter: { type: String, required: [true, "Commenter must exist"] },
    content: { type: String, required: [true, "Posts must have content"] },
}, { timestamps: true })
const post=mongoose.model('post',PostSchema)

const BlogSchema = new mongoose.Schema({
    creator: { type: String, required: [true, "Creator must exist"], minlength: [3, "Titles must have at least 3 characters"] },
    message: { type: String, required: [true, "Message content must exist"] },
    posts: [PostSchema]
}, { timestamps: true })
const blog=mongoose.model('blog',BlogSchema)

/////////////////////////GET AND POST /////////////////
app.get('/', (req, res) => {
    blog.find()
    .then(blogs => {
        res.render('index', { blogs: blogs});
    })
    .catch(err => res.json(err));
});
///////////////////////
app.post('/postblog', (req, res) => {
    const blogs = new blog(req.body)
    blogs.save()
    .then(() => res.redirect('/'))
    .catch(err => {
        for (var key in err.errors) {
            req.flash(key, err.errors[key].message);
        }
    res.redirect('/');
    });
});
//////////////////////
app.get("/postcomment/:blog_id", (req, res) => {
    const post = new post(req.body)
    post.save()
    .then(post =>{
        post.findOneAndUpdate({_id:req.params.blog_id},{ $push:{ post:post}})
             .then(() => res.redirect('/'))
                .catch(err => res.json(err))
        })
        .catch(err => {
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash(key, err.errors[key].message);
            }
            res.redirect('/');
        });
})
