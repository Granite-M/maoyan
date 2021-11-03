<template>
  <footer>
    <ul>
      <li
        :class="{ active: index == changeIndex }"
        @click="change(index, item.title)"
        v-for="(item, index) in list"
        :key="index"
      >
        <span class="iconfont" :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      list: [
        {
          icon: "icon-homeuizqdianying",
          title: "电影/影院",
        },
        {
          icon: "icon-shipin1",
          title: "视频",
        },
        {
          icon: "icon-shipin",
          title: "小视频",
        },
        {
          icon: "icon-qiaquan",
          title: "演出",
        },
        {
          icon: "icon-wode",
          title: "我的",
        },
      ],
      changeIndex: 0,
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
        this.changeIndex = this.$route.query.index || 0;
      },
    },
  },
  beforeDestroy() {
    console.log("底部销毁了");
  },
  methods: {
    //选项卡切换

    change(index, title) {
      this.changeIndex = index;

      switch (this.changeIndex) {
        case 0:
          this.$router.push("/Home/MyList");
          break;

        default:
          this.$router.push({
            path: "/Vedio",
            query: {
              title,
              index,
            },
          });
      }
    },
  },
};
</script>

<style lang='less' scoped>
@import url(../../assets/css/var.less);

footer {
  height: 48px;
  // background-color: pink;
  border-top: 1px solid @border-color;
  ul {
    display: flex;
    font-size: @s-size;
    height: 100%;

    li {
      flex: 1;
      height: 100%;
      .center();
      flex-direction: column;

      .iconfont {
        font-size: @l-size;
      }

      p {
        margin-top: 5px;
      }
    }

    .active {
      color: @theme-color;
    }
  }
}
</style>