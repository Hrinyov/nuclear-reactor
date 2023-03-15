<template>
  <main>
    <!-- <pre>{{ $store.state.user }}</pre> -->
  </main>
</template>

<script lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    mounted() {
      const { user } = useAuth0();

      this.$store.dispatch('login', user)
    }
  };
</script>

