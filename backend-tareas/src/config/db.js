const mongoose = require('mongoose');

const dbURLlLocal = 'mongodb://localhost:27017/dbtareas';
const dbURLCloud = 'mongodb+srv://robis-sallop:C7ykQI5U6NXXt7Eg@clustermongorobis.fbstcbb.mongodb.net/dbtareas';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURLlLocal);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;