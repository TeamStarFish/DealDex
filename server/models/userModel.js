const mongoose = require('mongoose');

//mongoDB connnection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

//User Schema
const UserSchema = new mongoose.Schema({
  // type must be string, it is required, must be atleast 6 characters and should be unique
  username: { type: String, required: true, min: 1, unique: true },
  // type must be string, must be atleast 6 characters, it is required
  password: { type: String, required: true },
  favorites: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
