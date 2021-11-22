import { Schema, model } from "mongoose";

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: {
      type: String,
      required: true,
      trim: true,
    },
    preparation: {
      type: String,
      required: true,
      trim: true,
    },
    dishType: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Recipe", recipeSchema);