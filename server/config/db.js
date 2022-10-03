const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, (err) => {
        if (err) {
            console.log(`Error: ${err}`.red.bold);
        } else {
            console.log(`✔ MongoDB Connected`.cyan.underline.bold);
        }
    });


}

module.exports = connectDB;