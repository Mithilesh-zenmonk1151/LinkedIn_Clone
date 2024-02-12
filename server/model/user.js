const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,

      trim: true,
    },
    // username:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //     trim:true
    // },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "id",
    },
    // address:{
    //     street:{
    //         type:String,

    //         trim:true
    //     },
    //     suite:{
    //         type:String
    //     },
    //     city:{
    //         type:String,
    //         trim:true
    //     },
    //     zipcode:{
    //         type:Number,
    //         trim:true
    //     },
    //     geo:{
    //         lat:{
    //             type:Number,
    //             trim:true
    //         },
    //         lng:{
    //             type:Number,
    //             trim:true
    //         }
    //     }
    // },
    // phone:{
    //     type:Number,

    // },
    // website:{
    //     type:String,
    //     trim:true
    // },
    // company:{
    //     name:{
    //         type:String,
    //         trim:true
    //     },
    //     catchPhrase:{
    //         type:String,
    //         trim:true
    //     },
    //     bs:{
    //         type:String,

    //     }
    // }
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
