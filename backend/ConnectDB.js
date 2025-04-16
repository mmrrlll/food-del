import { configDotenv } from "dotenv";
import { connect } from "mongoose";

console.log(process.env.MONGO_URI);

configDotenv();
const uri= process.env.MONGO_URI
console.log(uri);

export const connectMongoDB = async()=>{
    try{
        await connect(uri);
        console.log('connect to db');
        
    }catch(error){
        console.error(error, 'err')
    }
}
