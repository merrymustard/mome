const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const uploadCloud = require("../config/cloudinary");
const {
    signup,
    login,
    logout,
    upload,
    edit,
    loggedin
} = require('../controllers/auth.controllers')

router.post('/login',passport.authenticate('local'), login);
router.post('/signup', signup);
router.post('/edit', edit);
router.post('/logout', logout);
router.post("/upload", uploadCloud.single("photoURL"), upload);
router.get('/loggedin', isAuth, loggedin)


function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

module.exports = router;