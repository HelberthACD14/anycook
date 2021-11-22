<template lang="pug">
.row.justify-content-center
    .col-md-8
        .card.text-white.bg-success
            h2.card-header {{ currentRecipe.title }}
            .card-body
                h4 Ingredientes
                p.card-text.infoRecipeV(
                    v-html="ingredientes.replace(/(\\r)*\\n/g, '<br>')"
                )
            .card-body
                h4 Preparacion
                p.card-text.infoRecipeV(
                    v-html="preparacion.replace(/(\\r)*\\n/g, '<br>')"
                )
            .card-body
                .row.justify-content-center
                    .col-5
                        p
                            span.likes &#9829;
                            | {{ currentRecipe.likes }} Votos
                    .col-7.text-end 
                        p.FechaPublicado Publicado el {{ fecha }}
</template>
<script lang="ts">
import { Recipe } from "@/interfaces/Recipe";
import { getRecipe } from "@/Services/RecipeService";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      currentRecipe: {} as Recipe,
      ingredientes: "" as string,
      preparacion: "" as string,
      Fecha: undefined,
      fecha: "",
    };
  },
  methods: {
    async loadRecipe(id: string) {
      const res = await getRecipe(id);
      this.currentRecipe = res.data;
      this.ingredientes = this.currentRecipe.ingredients;
      this.preparacion = this.currentRecipe.preparation;
      this.Fecha = this.currentRecipe.date;
    },
    Dateformat() {
      let tempFecha = new Date();
      this.$data.fecha = tempFecha.toLocaleString();
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadRecipe(this.$route.params.id);
      this.Dateformat();
    }
  },
});
</script>
<style lang="sass">
.likes
  margin-right: 5px
  margin-left: 10px
  color: #ff0000
.infoRecipeV
  overflow-y: scroll
  text-overflow: ellipsis
  max-height: 150px
</style>