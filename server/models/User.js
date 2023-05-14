import mongoose from "mongoose";
const Userchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
          lastname: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique:true,
        },
       password: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },

        picturePath: {
            type:String,
            default:"",
        },
        friends: {
            type: Array,
            dfault:[]
        },
        location:String,
        occupation:String,
        viewedProfile: Number,
        impressions: Number,
    },
    {timestamps: true}

)
const User = mongoose.model("User",Userchema)
