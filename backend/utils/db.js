import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCSESFULLY");
    }catch(eror){
        console.log(eror);
    }
}
export default connectDB;

