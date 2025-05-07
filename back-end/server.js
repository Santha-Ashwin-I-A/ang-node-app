const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const {connectMongo} = require("./utils/mongoDb");
const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 5000; 


app.use(cors({
    origin: 'https://sturdy-sniffle-jj4gjv9rv4x735jrp-4200.app.github.dev/', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
    credentials: true // Allow cookies
}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api/product",productRoutes);

app.listen(PORT,()=>{
    connectMongo();
    console.log(`Server started on port ${PORT}`)
})