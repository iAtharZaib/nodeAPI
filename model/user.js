const mongoose = require('mongoose');

const user=new mongoose.Schema({ 
    id:{
        required:false,
        type:Number
    },
    name:{
        required:true,
        type:String,
        minlength:4
    },
    age:{
        required:true,
        type:Number,
        min:5
    }
})

module.exports=mongoose.model("user",user)