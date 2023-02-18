<template>
    <form @submit.prevent="login">
      <input v-model="email" type="email" required>
      <input v-model="password" type="password" required>
      <button type="submit">Login</button>
    </form>
  </template>

  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })
        this.$router.push({ name: 'home' })
      },
    },
  }
  </script>
