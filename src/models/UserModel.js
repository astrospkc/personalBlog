import mongoose from 'mongoose';

const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"Please enter username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true, "Please enter unique email"],
        unique:true
    },
    
    password:{
        type:String,
        required:[true, "Please enter password"]
    },
    // isVerified is kind of additional feature where a user will get verified only when the certain link is checked
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date


})

const User = mongoose.models.user||mongoose.model("users", userSchema);

export default User;
