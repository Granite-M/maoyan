<template>
  <div class="home">
    <div>
      <my-header></my-header>
      <MyLogo></MyLogo>
      <MyNav></MyNav>
    </div>
    <div>
      <!-- <MyList></MyList> -->
      <router-view></router-view>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "../components/Home/MyHeader.vue";
import MyLogo from "../components/Home/MyLogo.vue";
import MyNav from "../components/Home/MyNav.vue";
import MyBanner from "../components/Home/MyBanner.vue";
import MyList from "../components/Home/MyList.vue";
import MyFooter from "../components/Home/MyFooter.vue";
export default {
  name: "Home",
  components: { MyHeader, MyNav, MyLogo, MyBanner, MyList, MyFooter },
};
// http://www.pudge.wang:3080/api/area/list
</script>

<style lang='less' scoped>
.home {
  height: 667px;
  user-select: none;
  display: flex;
  flex-direction: column;
  > div:nth-of-type(2) {
    flex: 1;
    overflow: auto;
  }
}
</style>