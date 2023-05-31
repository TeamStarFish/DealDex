const express = require('express');
const { UNSAFE_NavigationContext } = require('react-router-dom');
const router = express.Router();
const userController = require('../controllers/userController')




router.post('/register', userController.register, (req, res, next) => {
  res.status(200).json(res.locals.userDoc)
})

router.post('/login', userController.login, (req, res, next) => {
  res.status(200).json(res.locals.user)
})

router.post('/favorites', userController.addFavorites, (req, res, next) => {
  res.status(200).send('added to favorites')
})

router.post('/favorites', userController.getFavorites, (req, res, next) => {
  res.status(200).json(res.locals.favorites)
})



// router.get('/profile', userController.profile, (req, res, next) => {
  // res.status(200).json(res.locals.userDoc)
// })

// app.post('/logout', async (req, res) => {
//   res.cookie('token', '');
// });



//route to /register
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const userDoc = await User.create({
//       username: username,
//       password: bcrypt.hashSync(password, salt),
//     });
//     // console.log("here---------" , userDoc)
//     res.json(userDoc);
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const userDoc = await User.findOne({ username });
//     const verified = bcrypt.compareSync(password, userDoc.password);
//     // const verified = //for bcrypt later

//     if (verified) {
//       console.log('verified');
//       //logges in with username, id, as `userInfo`***
//       jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
//         if (err) throw err;
//         res.cookie('token', token).json({
//           //sending userInfo to login page
//           id: userDoc._id,
//           username,
//           testSend: 'we in here',
//         });
//       });
//     }

//     //need to fill this part.. cookies and jwt..
//   } catch (err) {
//     res.status(400).json('wrong password or username');
//   }
// });

// app.get('/profile', (req, res) => {
//   const { token } = req.cookies;
//   // res.json('ok')
//   jwt.verify(token, secret, {}, (err, info) => {
//     if (err) throw err;
//     res.json(info);
//   });
// });

// app.post('/logout', async (req, res) => {
//   res.cookie('token', '');
// });

module.exports = router;