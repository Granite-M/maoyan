<template>
  <div class="list">

    <h2>
      {{ title }}
    </h2>
    <div class="footer">
      <MyFooter></MyFooter>
    </div>
  </div>
</template>

<script>
import MyFooter from "../components/Home/MyFooter.vue";
// import MyFooter from "../components/Home/MyFooter.vue";
// import MyFooter from "../components/Home/MyFooter.vue";
export default {
  name: "test",
  data() {
    return {
      title: "",
    };
  },
  components: { MyFooter },
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
.list {
  font-size: 50px;

  font-family: "楷体";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 667px;

  > h2 {
    flex: 1;
    background-color: orange;
    text-align: center;
  }
  user-select: none;
}
</style>
