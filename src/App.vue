<template lang="pug">
Navbar
.container.p-2
  router-view 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style lang="sass">
</style>
