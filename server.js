import express from "express";
import dotenv from "dotenv";
import router from "./routes/recipes.routes.js";
import mongoose from "mongoose";


dotenv.config();

const app = express();

const port = process.env.PORT || 8080

app.use(router);

// mongoose connection should be before the app listening
await mongoose.connect(process.env.MONGO_URI);



app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
 
});