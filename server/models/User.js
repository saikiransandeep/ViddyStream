// ViddyStream/server/models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Ensures each username is unique
      minlength: 3, // Minimum length for username
      maxlength: 30, // Maximum length for username
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures each email is unique
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], // Basic email validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum length for password (we'll hash it later)
    },
    profilePicture: {
      type: String,
      default: '', // Default to an empty string if no profile picture
    },
    subscribers: {
      type: [String], // Array of user IDs (strings) who subscribe to this user
      default: [],
    },
    subscribedChannels: {
      type: [String], // Array of channel/user IDs (strings) this user is subscribed to
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Mongoose automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model('User', UserSchema);