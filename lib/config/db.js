import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/uni');
        console.log('Connected to MongoDB');
        
    } catch (e) {
        console.error(e);
        
    }
}
export default connectDB