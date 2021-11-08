<template>
  <div>
    <p>mine</p>
    <button @click="fn">退出登录</button>
  </div>
</template>

<script>
export default {
  name: "mine",
  methods: {
    fn() {
      localStorage.setItem("logined", 0);
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