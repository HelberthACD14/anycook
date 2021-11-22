<template lang="pug">
.card.text-white.bg-success
  h2.card-header {{ title }}
  .card-body
    h4 Ingredientes
    p.card-text.infoRecipe(v-html="ingredients.replace(/(\\r)*\\n/g, '<br>')")
  .card-body
    h4 Preparacion
    p.card-text.infoRecipe(v-html="preparation.replace(/(\\r)*\\n/g, '<br>')")
  .card-body
    .row.justify-content-center
      .col-5
        p
          span.likes &#9829;
          | {{ likes }} Votos
      .col-7.text-end 
        p.FechaPublicado Publicado el {{ fecha }}
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecipeCardFull",
  data() {
    return {
      fecha: "",
    };
  },
  methods: {
    Dateformat() {
      let tempFecha = new Date(this.date);
      this.$data.fecha = tempFecha.toLocaleString();
    },
  },
  props: ["title", "ingredients", "preparation", "likes", "date"],
  mounted() {
    this.Dateformat();
  },
});
</script>
<style lang="sass">
.likes
  margin-right: 5px
  margin-left: 10px
  color: #ff0000
.FechaPublicado
  margin-top: 5px
  font-size: 13px
.infoRecipe
  overflow: hidden
  text-overflow: ellipsis
  max-height: 150px
</style>