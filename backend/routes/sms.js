const express = require('express');
const router = express.Router();
const twilio = require('twilio');


router.post('/send-sms', async (req, res) => {
  try {
    const { phoneNumber, body } = req.body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

    const message = await client.messages.create({
      body: body,
      from: '+18557854799', // Your Twilio phone number
      to: phoneNumber,
    });

    console.log(message.sid); // Log the message SID to the server console

    res.status(200).json({ message: 'SMS sent successfully', sid: message.sid });
  } catch (error) {
    console.error(error);
    console.error(error.message); // Check for specific error message
  console.error(error.code);    // Check for specific error code
    res.status(500).json({ message: 'Failed to send SMS' });
  }
});

module.exports = router;