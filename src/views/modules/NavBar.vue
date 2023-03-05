<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li @click="">
        <div class="sidebar_logo">
          <div class="sidebar_logo_items"></div>
          <div class="sidebar_logo_items"></div>
          <div class="sidebar_logo_items"></div>
        </div>
      </li>
    </ul>
  </nav>
  <div>
        <Sidebar />
      </div>
</template>

<script>
import  Sidebar  from "./Sidebar.vue";
export default{
  component: {
    Sidebar
  }
}
</script>

<style>
nav {
  background-color: #333;
  color: #fff;
  display: inline;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.sidebar_logo_items {
background-color: whitesmoke;
height: 2px;
width: 25px;
margin: 5px;
}

.sidebar_logo {
  padding: 13px 16px;
  cursor: pointer;
}

.sidebar_logo:hover {
  background-color: #111;
}

</style>
