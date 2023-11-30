const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/conn");
const collegeRoutes = require("./routes/collegeRoutes");
const companyRoutes = require("./routes/companyRoutes");
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors("*"));

app.use("/college", collegeRoutes);
app.use("/company", companyRoutes);


const PORT = 5000; 
const start = async() =>{
    try {
        await connectDB(`mongodb+srv://Aditi0723:4yManuckLptRZT6x@cluster0.kcvmvou.mongodb.net/?appName=mongosh+2.1.0`);
        console.log("Connection to DB Successful");
        app.listen(PORT, ()=>{
            console.log(`Server running at port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();