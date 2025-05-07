const mongoose = require("mongoose");

const connectMongo = async() =>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("connected to mongodb")})
    .catch((err)=>{console.log("cannot connect to mongo db",err)});
}
module.exports={connectMongo};