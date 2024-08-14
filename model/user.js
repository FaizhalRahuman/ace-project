var mongoose=require('mongoose');

var url='mongodb://faizhal:faizhal@ac-kpiqdwz-shard-00-00.jzd7ttq.mongodb.net:27017,ac-kpiqdwz-shard-00-01.jzd7ttq.mongodb.net:27017,ac-kpiqdwz-shard-00-02.jzd7ttq.mongodb.net:27017/?replicaSet=atlas-b52yd7-shard-0&ssl=true&authSource=admin';


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

module.exports = mongoose.model('users',userSchema);