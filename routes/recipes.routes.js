import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

const router = Router();


// POST/recipes

router.post('', addRecipe);


// GET/recipes
router.get('', getRecipes);

// GET/recipe/:id
router.get('/:id',getRecipe);

// PATCH/recipes/:id
router.patch('/:id', updateRecipe );

// DELETE/recipes/:id
router.delete('/:id', deleteRecipe);

export default router;