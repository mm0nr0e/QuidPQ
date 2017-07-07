
const sessionController = require('./../session/sessionController');
const mongoose = require('mongoose');
const userController = require('./../user/userController');

const cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;

function setCookie(req, res, next) {
  let randNum = Math.floor(Math.random() * 9999);

  res.cookie('secret', `${randNum}`, {httpOnly: true});
  console.log("Cookie created");
  next();
}

function setSSIDCookie(req, res, next) {
  const userId = res.locals.id;

  console.log('inside SSID cookie method');
  if(userId === null){
    next();
  }
  // res.locals.id = '54321';
  res.cookie('ssid', userId, {httpOnly: true});
  console.log("SSID Cookie created. ")
  next();
  //'Set-Cookie', `ssid=${res.locals.id}; Path=/; HttpOnly`
  // getUserId(req, res);
}
