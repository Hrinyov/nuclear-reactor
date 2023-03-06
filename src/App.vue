<script setup lang="ts">
import NavBar from "./views/modules/NavBar.vue";
import Sidebar from "./views/modules/Sidebar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <div v-if="$store.state.user">
        <NavBar />
        <Sidebar />
      </div>
      <RouterView/>
    </div>
  </header>
</template>
