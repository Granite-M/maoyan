

<template>
  <div class="box">{{ title }},{{ homeIndex }}</div>
</template>

<script>
export default {

  data() {
    return {};
  },
  props: ["title", "homeIndex"],
};
</script>

<style lang="less" scoped>
.box {
  font-size: 50px;
  // background-color: lightblue;
  padding: 0 15px;
  background-color: lightgreen;
  font-family: "楷体";
}
</style>
