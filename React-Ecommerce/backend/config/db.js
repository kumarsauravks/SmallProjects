import mongoose from "mongoose";

export const connectDB = async () =>{
    // await mongoose.connect('mongodb+srv://kumarsauravks:mysecurepassword@cluster0.t5tslyi.mongodb.net/?retryWrites=true&w=majority&appName=food-del').then(()=>console.log("DB Connected"))
    await mongoose.connect('mongodb://localhost:27017/tomato').then(()=>console.log("DB Connected"))
}