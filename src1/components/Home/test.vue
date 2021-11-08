<template>
  <div class="list">{{ title }},{{ index }}</div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {};
  },
  props: ["title", "index"],
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
