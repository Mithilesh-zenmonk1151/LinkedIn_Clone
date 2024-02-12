const mongoose = require("mongoose");
const educationalDetailsSchema= new mongoose.Schema({
    educationId:{
        type:String
    },
    schoolId:{
        type:String
    },
    degree:{
        type:String
    },
    field_of_study:{
        type:String
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    },
    grade:{
        type:String
    },
    description:{
        type:String
    }

},{timestamps:true});
module.exports= mongoose.model("educationalDetails", educationalDetailsSchema)