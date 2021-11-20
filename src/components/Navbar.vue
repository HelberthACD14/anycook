<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-lg.navbar-dark.bg-primary
  .container
    router-link(to="/").navbar-brand Red social
    div
      ul.navbar-nav
        li.nav-item
          router-link.nav-link(to="/") tasks
        li.nav-item
          router-link.nav-link(to="/tasks/new") Create task
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Navbar",
});
</script>