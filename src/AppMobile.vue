<template>
  <div id="app">
    <v-header></v-header>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
import vHeader from './components/mobile/header.vue';
export default {
  name: 'App',
  components: {
    vHeader,
  },
  created() {
    // console.log(this.$route)
  }
}
</script>
