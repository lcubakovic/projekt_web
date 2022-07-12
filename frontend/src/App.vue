<template>
  <div id="app">
    <div class="container">
      <NavBar></NavBar>
      <div class="background">
      <router-view></router-view>
    </div>
   </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavigationBar.vue";
import { CHECK_AUTH } from "@/common/types/actions";

export default {
  name: "app",
  components: {
    NavBar,
  },
  methods: {
    checkAuth() {
      this.$store.dispatch(CHECK_AUTH);
    },
  },
  mounted() {
    this.checkAuth();
  },
};
</script>

<style>
 
.background {
  background-image: url('./assets/bg.jpg');
  background-size: cover;
}  
</style>
