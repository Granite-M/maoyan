<template>
  <div class="nav">
    <div @click="toAddress" class="address">
      {{ addrsss }} <span class="iconfont icon-xiajiantou"></span>
    </div>
    <ul>
      <li v-for="(item, homeIndex) in menuList" :key="homeIndex">
        <a
          @click="changeIndex(homeIndex, item)"
          :class="{ active: activeIndex == homeIndex }"
          href="javascript:;"
        >
          {{ item }}</a
        >
      </li>
    </ul>
    <div class="serach"><span class="iconfont icon-sousuo"></span></div>
  </div>
</template>
<script>
export default {
  name: "MyNav",
  data() {
    return {
      menuList: ["热映", "影院", "待映", "经典电影"],
      activeIndex: 0,
      addrsss: "",
    };
  },
  props: ["title", "homeIndex"],
  watch: {
    "$route.path"() {
      this.addrsss = localStorage.getItem("address");
    },
  },
  created() {
    this.activeIndex = this.$route.query.homeIndex || 0;
    this.addrsss = localStorage.getItem("address") || "杭州";
  },
  methods: {
    toAddress() {
      this.$router.push({
        path: "/Address",
        query: {},
      });
    },
    changeAddress(val) {
      this.addrsss = val;
    },
    //选项卡切换
    changeIndex(index, title) {
      this.activeIndex = index;
      switch (this.activeIndex) {
        case 0:
          this.$router.push({
            path: "/home/hot",
            query: {
              title: "hot",
              homeIndex: 0,
            },
          });
          break;
        case 1:
          this.$router.push({
            path: "/home/cinema",
            query: {
              title: "cinema",
              homeIndex: 1,
            },
          });
          break;
        case 2:
          this.$router.push({
            path: "/home/wait",
            query: {
              title: "wait",
              homeIndex: 2,
            },
          });
          break;
        case 3:
          this.$router.push({
            path: "/home/classic",
            query: {
              title: "classic",
              homeIndex: 3,
            },
          });
          break;
        default:
          this.$router.push({
            path: "/notFound",
            query: {
              title,
              homeIndex,
            },
          });
      }
    },
  },
};
</script>
<style lang='less' scoped>
@import url(../../assets/css/var.less);
.nav {
  .center;
  height: 44px;
  padding: 0 15px;
  justify-content: space-between;
  .address {
    color: @gray-color;
    font-size: @s-size;
    span {
      position: relative;
      vertical-align: middle;
      top: -2px;
      font-size: 8px;
      transform: scale(0.8) rotate(90deg);
    }
  }
  ul {
    .center;
    flex: 1;
    padding: 0 10px;
    justify-content: space-around;
    li {
      .active {
        font-weight: 900;
        font-size: 17px;
        position: relative;
        &::after {
          content: "";
          width: 20px;
          height: 3px;
          border-radius: 1.5px;
          background: @theme-color;
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      line-height: 17px;
      a {
        font-size: 15px;
        color: @gray-color;
      }
    }
  }
  .serach {
    font-size: 16px;
    color: @theme-color;
  }
}
</style>