<script setup lang="ts">
import NavBar from "./views/modules/NavBar.vue";
import Sidebar from "./views/modules/Sidebar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div v-if="$store.state.user">
      <NavBar @toggle="toggleSidebar" />
    </div>
    <div v-show="sidebarOpen">
      <Sidebar />
    </div>
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  mounted() {
    const { user } = useAuth0();

    this.$store.dispatch("login", user);
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>
