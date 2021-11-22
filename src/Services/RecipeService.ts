import axios from "./Axios";
import { AxiosResponse } from "axios";
import { Recipe } from "@/interfaces/Recipe";

export const getRecipes = async (): Promise<AxiosResponse<Recipe[]>> =>
  await axios.get("/Recipes");

export const getRecipe = async (id: string): Promise<AxiosResponse<Recipe>> =>
  await axios.get("/Recipes/" + id);

export const createRecipe = async (Recipe: Recipe) =>
  await axios.post("/Recipes", Recipe);

export const updateRecipe = async (id: string, recipe: Recipe) =>
  await axios.put("/Recipes/" + id, recipe);

export const deleteRecipe = async (id: string) =>
  await axios.delete("/Recipes/" + id);
