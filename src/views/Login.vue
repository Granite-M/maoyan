<template>
  <div>
    <p>login</p>
    <button @click="fn">登录</button>
  </div>
</template>
<script>
export default {
  name: "login",
  methods: {
    fn() {
      localStorage.setItem("logined", 1);
      this.$router.push({
        path: "/home/hot",
        query: {
          title: "hot",
          homeIndex: 0,
        },
      });
    },
  },
};
</script>
<style>
</style>