const User = require('./userModel')

const userController = {};

userController.createUser = (req, res, next) => {
  if (req.body.username && req.body.password) {
    const newUser = new User({ username: req.body.username, password: req.body.password });
    newUser.save();
    next();
  }
};

userController.verifyUser = (req, res, next) => {
  User.find({ username: req.body.username} , (err, user) => {
    if (err) res.redirect('/signup');
    if (user.password === req.body.password) next();
    res.redirect('/');
  })
};

userController.isPageUser = (req, res, next) => {
  if (req.originalUrl matches cookie) res.redirect('/mycollection' + username)
}



module.exports = userController;