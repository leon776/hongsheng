<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import vHeader from './components/header.vue';
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
