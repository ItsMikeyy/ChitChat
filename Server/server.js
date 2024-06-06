const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const User = require("./Models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cors = require('cors');

const passportLocalMongoose = require("passport-local-mongoose");
const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/chitchat");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret:"secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000', 
        credentials: true, 
      }
));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.post("/register", (req, res) => {
    console.log(req.body.username)
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            res.status(409).send(err);
        }
        passport.authenticate("local")(req, res, function(){
        });
    });
});

app.post("/login",passport.authenticate("local",{
    
}), function(req, res){
    res.json({username: req.user.username, id: req.user._id});
});

app.get("/status", (req,res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
})

app.post("/logout", (req,res) => {
    req.logout(err => {
        if (err) { return res.status(500).json({ message: 'Error logging out' }); }
        res.json({ message: 'Logged out successfully' });
    });
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});