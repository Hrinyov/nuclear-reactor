<template>
  <div>
    <button @click="generateColor">Generate Random Color</button>
    <div :style="{ backgroundColor: color, width: '100px', height: '100px' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#ffffff' // initialize with white color
    }
  },
  methods: {
    generateColor() {
      let letters = '0123456789ABCDEF'
      let newColor = '#'
      for (let i = 0; i < 6; i++) {
        newColor += letters[Math.floor(Math.random() * 16)]
      }
      this.color = newColor
    }
  }
}
</script>
