<template>
  <div class="sidebar">
    <div class="profile">
      <div>
        <img
          class="avatar"
          :src="$store.state.user?.picture"
          alt="Profile picture"
        />
      </div>
      <div class="user">
        <pre class="nickname">{{ $store.state.user?.nickname }}</pre>
        <pre>{{ $store.state.user?.email }}</pre>
      </div>
    </div>
    <button class="sidebar-logout" @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  setup() {
    const { logout } = useAuth0();
    return {
      logout: () => {
        logout();
        (this as any).$router.push({ path: "/" });
      },
    };
  },
};
</script>

<style>
.sidebar {
  position: absolute;
  top: 10px;
  left: 45%;
  width: 250px;
  height: 250px;
  background-color: #4b1ad3;
  border-radius: 14px;
  z-index: 2;
  text-align: center;
  padding: 10px;
}

.avatar {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: #fff;
  margin-top: 10px;
  display: inline-block;
}
.sidebar-logout {
  position: absolute;
  bottom: 10px;
  width: 200px;
  height: 50px;
  background-color: #fff;
  color: #4b1ad3;
  border: none;
  border-radius: 10px;
  left: 25px;
  cursor: pointer;
}
.sidebar-logout:hover {
  border: 3px solid rgb(177, 112, 248);
  font-size: larger;
}
.user {
  color: white;
}
.nickname {
  font-size: large;
}
</style>
