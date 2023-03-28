import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,

    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    website: {
        type: String,
    },
    occupation: {
        type: String,
    },
    education: {
        type: String,
    },
    Intrests :{
      type: Array

    }


}, { timestamps: true });


UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

UserSchema.pre('findOneAndUpdate', async function (next) {
    // Hash the password if it's being updated
    if (this._update.password) {
        this._update.password = await bcrypt.hash(this._update.password, 10);
    }
    next();
});




const UserRegister = new mongoose.model("user", UserSchema);

export default UserRegister;