const express=require("express");
const connectDB = require("./db/conn");
const app=express();
require("./db/conn");
const errorHandle = require("./errorHandler/errorHandle");
const taskRoutes = require("./routes/taskRoutes");
app.use(express.json());
const dotenv = require('dotenv').config();
connectDB();

app.use("/tasks", taskRoutes);
app.use((req, res, next) => {
    const error = new Error('Invalid Request');
    error.status = 404;
    next(error);
  });
app.use(errorHandle);


const PORT=process.env.PORT || 3000;
app.get("/",async (req,res) =>{
    res.send("Hello Welcome to my API");
})

app.listen(PORT, () => {
    console.log(`Your connection is live at  port no. ${PORT}`);

})

