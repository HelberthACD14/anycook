<template lang="pug">
.row.justify-content-center
  .col-md-8
    ul.list-group
      li.list-group-item(
        v-for="(recipe, index) in recipes",
        style="border: none",
        :key="index")
        //- click="this.$router.push(`/Recipes/${recipe._id}`)"
      
        RecipeCard(
          :title="recipe.title",
          :ingredients="recipe.ingredients",
          :preparation="recipe.preparation",
          :likes="recipe.likes",
          :date="recipe.date",
          :id="recipe._id"
        )
</template>
<script lang="ts">
import { Recipe } from "@/interfaces/Recipe";
import { getRecipes } from "@/Services/RecipeService";
import { defineComponent } from "vue";
import RecipeCard from "@/components/RecipeCard.vue";

export default defineComponent({
  data() {
    return {
      recipes: [] as Recipe[],
    };
  },
  methods: {
    async loadRecipes() {
      const res = await getRecipes();
      this.recipes = res.data;
    },
  },
  mounted() {
    this.loadRecipes();
  },
  components: {
    RecipeCard,
  },
});
</script>