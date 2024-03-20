import express from "express";
import dotenv from "dotenv";
import router from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";
// import recipe from "./models/recipe.js";


dotenv.config();

const app = express();

// apply middlewares
app.use(express.json);
app.use(express.urlencoded({extended: false}));
app.use(cors());

const port = process.env.PORT || 8080

app.use(router);
app.use('/recipes',router)

// mongoose connection should be before the app listening
await mongoose.connect(process.env.MONGO_URI);


app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
 
});