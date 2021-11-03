<template>
  <div class="nav">
    <div @click="toAddress" class="address">
      {{ addrsss }} <span class="iconfont icon-xiajiantou"></span>
    </div>
    <ul>
      <li v-for="(item, index) in menuList" :key="index">
        <a
          @click="changeIndex(index, item)"
          :class="{ active: activeIndex === index }"
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
      addrsss: "杭州",
    };
  },
  methods: {
    toAddress() {
      console.log("toAddress");
      this.$router.push({
        path: "/Address",
        query: {
          // id: m.id,
          // title: m.title,
        },
      });
    },
    changeAddress(val) {
      this.addrsss = val;
    },
    //选项卡切换
    changeIndex(index, item) {
      this.activeIndex = index;

      switch (this.activeIndex) {
        case 0:
          this.$router.push("/Home/MyList");
          break;
        default:
          this.$router.push({
            path: "/Home/test",
            query: {
              title: item,
            },
          });
      }
    },
  },
  mounted() {
    this.$bus.$on("getAddress", this.changeAddress);
  },
  beforeDestroy() {
    console.log("nav 被销毁了");
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