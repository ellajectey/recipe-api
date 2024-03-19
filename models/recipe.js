import { Schema, model } from "mongoose";

const recipeSchema = new Schema({

    title: {type: String, required: true},
    description: {type:String, required: true},
    image: {type:String, required: true},
    country: {type:String}

});

export default model('recipe', recipeSchema,'recipes');