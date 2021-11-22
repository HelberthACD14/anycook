import { Router } from "express";
import Recipe from "../models/recipes";

const router = Router();

router.get("/Recipes", async (req, res) => {
  const tasks = await Recipe.find().sort({date : -1});
  console.log(tasks);
  res.send(tasks);
});

router.post("/Recipes", async (req, res) => {
  const { title, ingredients, preparation,  dishType, region} = req.body;

  const recipe = new Recipe({ title, ingredients, preparation,  dishType, region});

  await recipe.save();

  res.json(recipe);
});

router.get("/Recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    res.send(recipe);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/Recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    return res.json(recipe);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put("/Recipes/:id", async (req, res) => {
  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedRecipe);
});

export default router;
