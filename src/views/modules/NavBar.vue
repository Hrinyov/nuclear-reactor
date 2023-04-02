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
      <li>
        <BurgerMenuButton @click="$emit('toggle')" @click.stop />
      </li>
    </ul>
  </nav>
</template>

<script>
import BurgerMenuButton from "./BurgerMenuButton.vue";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  components: {
    BurgerMenuButton,
  },
  setup() {
    const state = reactive({
      activeItemId: null,
      items: [
        { id: 1, text: "Home", link: "/" },
        { id: 2, text: "About", link: "/about" },
        { id: 3, text: "Contact", link: "/contact" },
        { id: 4, text: "Profile", link: "/profile" },
      ],
    });

    const handleClickItem = (itemId) => {
      state.activeItemId = itemId;
    };
    return {
      ...state,
      handleClickItem,
    };
  },
});
</script>

<style>
nav {
  color: #4b1ad3;
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
  color: #4b1ad3;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(231, 208, 255);
}
</style>
