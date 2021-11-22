<template lang="pug">
.row.justify-content-center
  .col-md-6
    h1.text-center.mb-4 Cuentanos de tu receta
    form.card.card-body(@submit.prevent="saveRecipe()")
      input.form-control.mb-3(
        type="text",
        placeholder="Titulo de tu receta",
        v-model="recipe.title",
        autofocus
      )
      textarea.form-control.mb-3(
        rows="3",
        placeholder="Cuentanos tus ingredientes...",
        v-model="recipe.ingredients"
      )
      textarea.form-control.mb-2(
        rows="3",
        placeholder="Cuenta como lo preparas...",
        v-model="recipe.preparation"
      )
      label.form-label(for="Categoria") ¿Que categoria aplica mejor a tu receta?
      select#Categoria.form-select.mb-3(v-model="recipe.dishType")
        option(value="Entrada") Entrada
        option(value="Plato fuerte") Plato fuerte
        option(value="Bebida") Bebida
        option(value="Postre") Postre
        option(value="Salsa") Salsa
        option(value="") Ninguna
      label.form-label(for="Region") ¿De que tipo es tu cocina?
      select#Region.form-select.mb-3(v-model="recipe.region")
        option(value="Mexicana") Mexicana
        option(value="Vietnamita") Vietnamita
        option(value="Japonesa") Japonesa
        option(value="peruana") Peruana
        option(value="Italiana") Italiana
        option(value="China") China
        option(value="Francesa") Francesa
        option(value="Colombiana") Colombiana
        option(value="") Ninguna
        
      button.btn.btn-primary(
        :disabled="!recipe.title || !recipe.ingredients || !recipe.preparation || !recipe.region || !recipe.dishType"
      ) Guardar
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "@/interfaces/Recipe";
import { createRecipe } from "@/Services/RecipeService";

export default defineComponent({
  data() {
    return {
      recipe: {
        region:'Mexicana',
        dishType: 'Entrada'
      } as Recipe,
    };
  },  
  methods: {
    async saveRecipe() {
      const res = await createRecipe(this.recipe);
      console.log(res);
      this.$router.push({ name: "feed" });
    },
  },
});
</script>
