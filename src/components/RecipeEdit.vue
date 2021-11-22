<template lang="pug">
.row.justify-content-center
  .col-md-6
    h1.text-center.mb-4 Actualiza tu receta
    form.card.card-body(@submit.prevent="handleUpdate()")
      input.form-control.mb-3(
        type="text",
        v-model="currentRecipe.title",
        autofocus=""
      )
      textarea.form-control.mb-3(rows="3", v-model="currentRecipe.ingredients")
      textarea.form-control.mb-2(rows="3", v-model="currentRecipe.preparation")
      label.form-label(for="Categoria") ¿Que categoria aplica mejor a tu receta?
      select#Categoria.form-select.mb-3(v-model="currentRecipe.dishType")
        option(value="Entrada") Entrada
        option(value="Plato fuerte") Plato fuerte
        option(value="Bebida") Bebida
        option(value="Postre") Postre
        option(value="Salsa") Salsa
        option(value="") Ninguna
      label.form-label(for="Region") ¿De que tipo es tu cocina?
      select#Region.form-select.mb-3(v-model="currentRecipe.region")
        option(value="Mexicana") Mexicana
        option(value="Vietnamita") Vietnamita
        option(value="Japonesa") Japonesa
        option(value="peruana") Peruana
        option(value="Italiana") Italiana
        option(value="China") China
        option(value="Francesa") Francesa
        option(value="Colombiana") Colombiana
        option(value="") Ninguna
      button.btn.btn-success.mb-3 Actualizar
      button.btn.btn-warning(@click="handleDelete()") Borrar
</template>
<script lang="ts">
import { Recipe } from "@/interfaces/Recipe";
import {
  getRecipe,
  updateRecipe,
  deleteRecipe,
} from "@/Services/RecipeService";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  data() {
    return {
      currentRecipe: {} as Recipe,
    };
  },
  methods: {
    async loadRecipe(id: string) {
      const res = await getRecipe(id);
      this.currentRecipe = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        await updateRecipe(this.$route.params.id, this.currentRecipe);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        await deleteRecipe(this.$route.params.id);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadRecipe(this.$route.params.id);
    }
  },
});
</script>