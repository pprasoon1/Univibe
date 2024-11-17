import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/uni');
        await mongoose.connect('mongodb+srv://prasu202324:prasu202324@cluster0.dk0id.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
        
    } catch (e) {
        console.error(e);
        
    }
}
export default connectDB