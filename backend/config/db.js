import mongoose from "mongoose"

export const connectDB= async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB Connected");   
    } catch (error) {
        console.log("Error connecting to MONGO DB",error);
        process.exit(1);
    }
}