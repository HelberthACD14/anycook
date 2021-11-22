<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
  .container
    router-link(to="/").navbar-brand
      img(src="../assets/chef.png" width="30" style="margin-right: 5px")
      | AnyCook
    div
      ul.navbar-nav
        li.nav-item
          router-link.nav-link(to="/Recipe/new") Crea una receta
    
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Navbar",
});
</script>