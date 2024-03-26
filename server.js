import express from "express";
import dotenv from "dotenv";
import router from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";
// import recipe from "./models/recipe.js";


dotenv.config();

const app = express();

// apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
// app.use(express.static('uploads'));
app.use(express.static('uploads'));

const port = process.env.PORT || 8080


// connection should be before app use
await mongoose.connect(process.env.MONGO_URI);


app.use('/recipes',router)


app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
 
});