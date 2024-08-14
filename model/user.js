var mongoose=require('mongoose');

var url='mongoose://localhost:27017/employeeManagement';


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    id:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,

    },
    address:{
        type:String
    },
    role:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    exp:{
        type:String
    }
    


});

module.exports = mongoose.model('users',userSchema)