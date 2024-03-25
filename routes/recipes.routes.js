import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

// configure (multer) upload middleware
const upload = multer({dest:'uploads'});


// create recipes router
const router = Router();


// POST/recipes
router.post('/', upload.single('image'), addRecipe);

// GET/recipes
router.get('/', getRecipes);

// GET/recipe/:id
router.get('/:id',getRecipe);

// PATCH/recipes/:id
router.patch('/:id', updateRecipe );

// DELETE/recipes/:id
router.delete('/:id', deleteRecipe);

export default router;