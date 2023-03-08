<template>
  <main>
    <button @click="logout">Logout</button>
    <!-- <pre>{{ $store.state.user }}</pre> -->
  </main>
</template>

<script lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();
      return {
        logout: () => {
          logout();
          this.$router.push({ path: '/login' });
        },
        user,
        isAuthenticated
      };
    },
    mounted() {
      const { user } = useAuth0();

      this.$store.dispatch('login', user)
    }
  };
</script>

