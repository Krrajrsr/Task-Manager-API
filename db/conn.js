const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS
    });
    console.log('Hurray! Connected to Database');
  } catch (err) {
    console.error('Failed to connect to database', err);
  }
};

module.exports = connectDB;

