const express = require('express');
const router = express.Router();

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