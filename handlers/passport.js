const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(User.createStrategy());

// will ask passport to put user on the req
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

