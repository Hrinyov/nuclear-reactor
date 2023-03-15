<template>
  <nav>
    <ul>
      <li 
        v-for="item in items" 
        :key="item.id" 
        :class="{ active: item.id === activeItemId }" 
      >
        <router-link :to="item.link">
          {{ item.text }}
        </router-link>
      </li>
      <li @click="">
        <div class="sidebar_logo">
          <div class="sidebar_logo_items"></div>
          <div class="sidebar_logo_items"></div>
          <div class="sidebar_logo_items"></div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import  Sidebar  from "./Sidebar.vue";
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      activeItemId: null,
      items: [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'About', link: '/about' },
        { id: 3, text: 'Contact', link: '/contact' },
        { id: 4, text: 'Profile', link: '/profile' }
      ]
    });

    const handleClickItem = (itemId) => {
      state.activeItemId = itemId; 
    };

    return {
      ...state,
      handleClickItem
    }
  }
})
</script>

<style>
nav {
  color: #4B1AD3;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: #4B1AD3;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(231, 208, 255);
}

.sidebar_logo_items {
background-color:#4B1AD3;
height: 2px;
width: 25px;
margin: 5px;
}

.sidebar_logo {
  padding: 13px 16px;
  cursor: pointer;
}

.sidebar_logo:hover {
  background-color: rgb(231, 208, 255);
}

</style>
