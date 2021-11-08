<template>
  <div class="home">
    <template v-if="index == 1 || index == 2">
      <mylogo></mylogo>
      <myheader title="猫眼电影"></myheader>
    </template>
    <template v-else>
      <myheader title="猫眼电影"></myheader>
      <mylogo></mylogo>
      <mynav></mynav>
    </template>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>
<script>
import myheader from "../components/common/Header.vue";
import mylogo from "../components/common/Logo.vue";
import mynav from "../components/common/Nav.vue";
import myfooter from "../components/common/Footer.vue";
export default {
  data() {
    return {
      index: 0,
    };
  },
  components: { mynav, mylogo, myheader, myfooter },
  created() {
    this.$store.dispatch("hot/getBannerMoviesList");
    this.$store.dispatch("hot/getHotList");
    this.$store.dispatch("address/getAddressList");
    this.index = this.$route.query.footerIndex || 0;
  },
  watch: {
    "$route.path": {
      deep: true,
      handler() {
        this.index = this.$route.query.footerIndex || 0;
      },
    },
  },
};
</script>
<style lang='less' scoped>
.home {
  height: 667px;
  user-select: none;
  display: flex;
  flex-direction: column;
  > div:nth-of-type(3) {
    flex: 1;
    overflow: auto;
  }
}
</style>