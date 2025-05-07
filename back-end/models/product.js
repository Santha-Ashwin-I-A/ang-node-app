const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    ownerId:{
        type:mongoose.Types.ObjectId,
    }
});

module.exports = mongoose.model('Product', productSchema);