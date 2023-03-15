<template>
  <div class="user-profile">
    <div class="user-info">
      <!-- <img :src="user.avatar" alt="Profile picture" /> -->
      <h2>{{` name: ${$store.state.user?.nickname} `}}</h2>
      <!-- <p>{{ user.email }}</p> -->
    </div>
    <div class="user-stats">
      <div class="stat">
        <div class="stat-name">Posts</div>
        <!-- <div class="stat-value">{{ user.posts }}</div> -->
      </div>
      <div class="stat">
        <div class="stat-name">Followers</div>
        <!-- <div class="stat-value">{{ user.followers }}</div> -->
      </div>
      <div class="stat">
        <div class="stat-name">Following</div>
        <!-- <div class="stat-value">{{ user.following }}</div> -->
      </div>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

export default {
  setup() {
      const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();
      return {
        logout: () => {
          logout();
           (this as any).$router.push({ path: '/' });
        },
        user,
        isAuthenticated
      };
    },
};
</script>

<style>

h2{
  color: #cccccc;
}
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.user-info img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.user-stats {
  display: flex;
  justify-content: space-between;
}

.stat {
  text-align: center;
}

.stat-name {
  font-weight: bold;
}

.stat-value {
  font-size: 1.5rem;
}
</style>
