const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const dotenv = require('dotenv');
// const twilio = require('twilio'); // Remove the import for twilio
dotenv.config();

// Create a new user and save it to the database
router.post('/create', async (req, res) => {
  try {
    const { name, phoneNumber, termsAgreed } = req.body;

    // check if a user exists with the same number 
    const existingUser = await User.findOne({phoneNumber});

    if (existingUser) {
      return res.status(409).json({message: "A user with this phone number already exists"})
    }
    // if user does not exist, then create
    const user = new User({
      name,
      phoneNumber,
      termsAgreed,
    });

    const savedUser = await user.save();

    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

module.exports = router;
