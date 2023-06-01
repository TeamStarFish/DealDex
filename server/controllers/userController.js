const bcrypt = require('bcrypt');
const User = require('../models/userModel')
const userController = {};


userController.register = async (req, res, next) => {
  const { username, password } = req.body;
  const salt = 10;

  try {
    const userDoc = await User.create({
      username: username,
      password: bcrypt.hashSync(password, salt),
    });

    
    res.locals.userDoc = userDoc;
    next();

  } catch (err) {
    return next({
      log: 'Error in userController register',
      status: 400,
      message: { err: 'Error in userController register' }
    });
  }
}

userController.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.findOne({ username });
    const verified = bcrypt.compareSync(password, userDoc.password);
    // const verified = //for bcrypt later

    if (verified) {
    //   console.log('verified');
    //   //logges in with username, id, as `userInfo`***
    //   jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
    //     if (err) throw err;
    //     res.cookie('token', token).json({
    //       //sending userInfo to login page
    //       id: userDoc._id,
    //       username,
    //       testSend: 'we in here',
    //     });
    //   });
    res.locals.user = userDoc;
    next();
    }

    //need to fill this part.. cookies and jwt..

  } catch (err) {
    return next({
      log: 'Error in userController login',
      status: 400,
      message: { err: 'Error in userController login' }
    });
  }
}

userController.addFavorites = async (req, res, next) => {

}

userController.getFavorites = async (req, res, next) => {
  
}

// userController.profile = async (req, res, next) => {
//   const { token } = req.cookies;

//   jwt.verify(token, secret, {}, (err, info) => {
//     if (err) throw err;
//     res.json(info);
//   });
// }

module.exports = userController;


// const jwt = require('jsonwebtoken');
// token for jwt later
// const secret = 'changjunpatrickdocortland';