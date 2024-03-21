
import { RecipeModel } from "../models/recipe.js";




export const addRecipe = async (req, res, next) => {
try {
        // add recipe to the database

    const createResult = await RecipeModel.create(req.body);
        // return the response
    res.status(201).json(createResult);
       
} catch (error) {

    // forward to express error handler
    next(error);
}
}

export const getRecipes = async (req, res, next) => {
    try {
        const findResult = await RecipeModel.find(req.body);

        res.json(findResult);
    } catch (error) {

        next(error);
    }
}

export const getRecipe =  async (req, res,next) => {
    // Get single recipe with id
    try {
        const findByIdResult = await RecipeModel.findById(req.params.id)
    // return 404 if recipe not found
    if(findByIdResult === null){

        return res.status(404).json({
        message: `Recipe with ObjectId: ${req.params.id} Not Found`
        
    });
    }
        // return response
        return  res.status(200).json(findByIdResult)

    } catch (error) {

        next(error)
    }
    
   

}

export const updateRecipe =(req, res) => {
    res.send('patch recipe!');
}

export const deleteRecipe = (req, res) => {
    res.send('Delete recipes');
}