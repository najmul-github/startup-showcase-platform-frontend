<template>
  <Navbar v-if="!(this.$route.name == 'Login')"/>
  <router-view/>
</template>

<script>
import Navbar from "./components/partials/navbar"

export default {
  components:{
    Navbar
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
