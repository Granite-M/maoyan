<template>
  <div class="list">{{ title }}</div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      title: "",
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  watch: {
    "$route.path": {
      deep: true,
      handler() {
        this.title = this.$route.query.title;
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import url(../../assets/css/var.less);
.list {
  font-size: 50px;
  // background-color: lightblue;
  padding: 0 15px;
  background-color: lightblue;
  font-family: "楷体";
}
</style>
