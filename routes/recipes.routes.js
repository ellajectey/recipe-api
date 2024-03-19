import { Router } from "express";
import Recipe from "../models/recipe";

const router = Router();


// POST/recipes

router.post('/recipes', (req, res) => {
    res.send('post recipe');
});


// GET/recipes
router.get('/recipes', (req, res) => {
    res.send('Get recipe!');
});
// GET/recipes/:id
router.get('/recipes/:id', (req, res) => {
    res.send('Get recipe with id');
});
// PATCH/recipes/:id
router.patch('/recipes/:id', (req, res) => {
    res.send('patch recipe!');
});

// DELETE/recipes/:id
router.delete('/recipes/:id', (req, res) => {
    res.send('Delete recipes');
});

export default router;