import mongoose from 'mongoose';

const mongooseConnect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)    
        console.log('Connected to database');
    } catch (error) {
        console.log("Error while connecting to database", error);
    }
}

export default mongooseConnect;