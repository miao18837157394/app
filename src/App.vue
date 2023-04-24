<template>
  <div class="app">
    <Main />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Main from './components/main/main.vue'
export default defineComponent({
  name: 'App',
  components: {
    Main
  },
  setup() {
    return {}
  }
})
</script>

<style>
 #app {
  width: 100%;
  height: 100%;
  overflow: auto;
 }
</style>
