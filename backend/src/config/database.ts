import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URL enviroment variable is not defined")
        }

        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDb Connection Error:", error);
        process.exit(1); //exit with failure
        // status code 1 means failure
        //status code 0 means success
    }
};