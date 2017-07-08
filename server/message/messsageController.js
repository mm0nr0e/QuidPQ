const Message = require('./messageModel');
const User = require('./../user/userModel')

const messageController = {};

messageController.sendMessage = (req, res, next) => {
  const msgTo = req.originalUrl.slice(11);
  User.findOne({ _id: req.cookies.ssid }, (err, user) => {
    if (err) res.status(400).end();
    const newMessage = new Message({ msgTo: msgTo, msgFrom: user.username, msgContent: req.body.messageContent })
    newMessage.save()
  })
};

messageController.getUserMessages = (req, res, next) => {
  const msgTo = req.originalUrl.slice(11);
  Message.find({ msgTo: msgTo }, (err, messages) => {
    if (err) res.redirect('/');
    res.locals.messages = messages;
    next();
  })
};

module.exports = messageController;