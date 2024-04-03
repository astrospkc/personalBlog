import mongoose from "mongoose";


export async function connect(){

    try {

        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Mongodb connected successfully");
        })

        connection.on('error',(err)=>{
            console.log("Mongodb not connected , interruption occurred" + err);
            process.exit();
        })
        
    } catch (error) {
        console.err(error);
    }
}