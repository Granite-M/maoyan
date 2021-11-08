<template>
  <div class="home">
    <!-- <template v-if="title != title"> </template> -->

    <template v-if="title == 'video' || title == 'minivideo'">
      <mylogo></mylogo>
      <myheader></myheader>
    </template>

    <template v-else-if="title != 'video' && title != 'minivideo'">
      <myheader></myheader>
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
      title: "",
    };
  },
  components: { mynav, mylogo, myheader, myfooter },
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