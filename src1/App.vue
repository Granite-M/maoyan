<template>
  <div>
    <keep-alive>
    
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: { Home },
};
</script>

<style>
</style>