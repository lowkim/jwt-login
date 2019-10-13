require('dotenv').config()
import mongoose from 'mongoose'
import User from './schemas/userSchema';
import Message from './schemas/messageSchema';

const mongodb = process.env.DATABASE_URL;
const connectDb = () =>{
    console.log("hi")
    console.log(mongodb)
    return mongoose.connect(mongodb, {useNewUrlParser:true, useUnifiedTopology:true})
}

const models = {User,Message}
export {connectDb, models}