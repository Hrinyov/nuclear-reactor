<script setup lang="ts">
import NavBar from "./views/modules/NavBar.vue";
import Sidebar from "./views/modules/Sidebar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
      <Sidebar />
      <RouterView />
    </div>
  </header>
</template>
