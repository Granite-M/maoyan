<template>
  <div class="MiniVideo">{{ title }},{{ index }}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "index"],
};
</script>
<style lang="less" scoped>
.MiniVideo {
  font-size: 50px;
  // background-color: lightblue;
  padding: 0 15px;
  background-color: lightblue;
  font-family: "楷体";
  height: 509px;
}
</style>
