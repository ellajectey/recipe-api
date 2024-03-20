
import { RecipeModel } from "../models/recipe.js";
import { model } from "mongoose";



export const addRecipe = async (req, res) => {
    // add recipe to the database
const createResult = await RecipeModel.create(req.body);
    // return the response
res.json(createResult);
   
}

export const getRecipes =(req, res) => {
    res.send('Get all recipes');
}

export const getRecipe =  (req, res) => {
    res.send('Get recipe with id');
}

export const updateRecipe =(req, res) => {
    res.send('patch recipe!');
}

export const deleteRecipe = (req, res) => {
    res.send('Delete recipes');
}