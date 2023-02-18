<script setup lang="ts">
</script>

<template>
  <main>
    <pre>{{ $store.state.user }}</pre>
    <pre>{{ $store.getters.isLoggedIn }}</pre>
    <RouterLink to="/login">Login</RouterLink>
  </main>
</template>
