<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import home from "./views/Home.vue";
export default {
  name: "App",
  components: { home },
};
</script>
<style>
</style>