const User = require('./userModel');

const userController = {};

userController.createUser = (res, req, next) => {
  if (req.body.username && req.body.password) {
    const newUser = new User({ username: req.body.username, password: req.body.password });
    newUser.save();
    next();
  } else {
    res.redirect('/signup');
  }
};

userController.verifyUser = (res, req, next) => {
  if (req.body.username && req.body.password) {
    User.findOne({username: req.body.username}, (err, user) => {
      if (err) res.redirect('/signup');
      if (user.password === req.body.password) next();
      res.redirect('/');
    })
  } else {
    res.redirect('/signup');
  }
};

userController.isPageUser = (res, req, next) => {
  const pageUser = req.originalUrl.slice(11);
  User.findOne({ _id: req.cookies.ssid}, (err, user) => {
    if (err) res.redirect('/');
    if (user.username === pageUser) res.redirect(`/mycollection/${pageUser}`);
    next();
  })
};

module.exports = userController;