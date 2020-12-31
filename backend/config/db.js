const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/notesdb', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
