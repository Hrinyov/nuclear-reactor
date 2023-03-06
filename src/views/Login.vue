<script lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    data () {
      return {
        message: ""
      }
    },
    setup() {
      const { loginWithRedirect, logout } = useAuth0();
      return {
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
          })
        },
      }
    },
  }
  </script>

<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form class="login-form" @submit.prevent="login">
      <button class="btn login-btn" @click="login">Login</button>
    </form>
  </div>
</template>
  
  <style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .login-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
  }
  
  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #1976d2;
  }
  
  input[type='email'],
  input[type='password'] {
    border: 0.5px solid  #1976d2;
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  button.login-btn {
    background-color: #1e88e5;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    cursor: pointer;
  }
  
  button.login-btn:hover {
    background-color: #1976d2;
  }
  </style>
  
