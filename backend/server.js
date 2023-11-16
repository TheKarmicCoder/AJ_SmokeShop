const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const smsRoutes = require('./routes/sms');

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO, {
 
})
.then(() => console.log("Connection Successful"))
.catch((error) => console.error(error));
app.use('/api/user', userRoutes);
app.use("/api/sms", smsRoutes)

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "frontend", 'dist',)));

// Handle any other requests by sending the frontend's HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", 'dist', 'index.html'));
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
