const jwt = require('jsonwebtoken');
const cookieController = {};

cookieController.create = async (req, res, next) => {
  user = res.locals.user;

  try {
    const token = await jwt.sign(user, process.env.MY_SECRET, { expiresIn: '1h'})

    console.log('token:', token)

    res.cookie('token', token, {
      httpOnly: true
    })

    next();

  } catch(err) {
    return next({
      log: 'Error in cookieController.create',
      status: 400,
      message: { err: 'Error in cookieController.create' }
    });
  }
  

}

cookieController.verify = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    const user = jwt.verify(token, process.env.MY_SECRET)

    res.locals.userId = user.userId;

    next();

  } catch(error) {

    res.clearCookie('token');
    return res.redirect('/auth/login')
  }
}








module.exports = cookieController;