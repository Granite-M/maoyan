<template>
  <div class="hot">
    <div class="movieList">
      <div>
        <MyBanner></MyBanner>
        <ul>
          <li
            v-for="item in hotList"
            :key="item._id"
            @click="toDetail(item.movieid)"
          >
            <div>
              <img :src="item.img | changeImgSrc" alt="" />
            </div>
            <div>
              <h4>{{ item.nm }}</h4>
              <p>
                观众评 <span>{{ item.sc }}</span>
              </p>
              <p>主演：{{ item.star }}</p>
              <p>{{ item.showInfo }}</p>
            </div>
            <div>
              <div v-if="item.preShow" class="red">购票</div>
              <div v-else class="blue">预售</div>
            </div>
          </li>
          <li v-if="bottom">
            <h3>我也是有底线的</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
import MyBanner from "../common/Banner.vue";
import { mapState } from "vuex";
export default {
  name: "Hot",
  data() {
    return {
      bs: null,
      bottom: false,
    };
  },
  filters: {
    //过滤img 的src
    changeImgSrc(src) {
      return (src = src.replace(/\/w\.h/, ""));
    },
  },
  components: { MyBanner },
  created() {
    this.$nextTick(() => {
      this.Scroll();
    });
  },
  computed: {
    ...mapState("hot", ["more_idList", "hotList"]),
  },
  methods: {
    toDetail(id) {
      console.log(id);
      this.$router.push({
        path: "/detail",
        query: {
          movieid: id,
        },
      });
    },
    //初始化 纵向滚动事件 添加倒地事件
    Scroll() {
      this.bs = new BetterScroll(".movieList", {
        scrollX: false,
        scrollY: true,
        click: true,
        mouseWheel: true, //开启鼠标滚轮
        disableTouch: false, //启用手指触摸
        pullDownRefresh: true,
        pullUpLoad: {
          // 阈值
          threshold: 400,
        },
      });
      // 监听拉到底的事件
      this.bs.on("pullingUp", async () => {
        this.bs.refresh();
        await this.getMore();
        this.bs.finishPullUp();
      });
    },
    //请求新数据
    getMore() {
      let ids = this.more_idList.slice(
        this.hotList.length,
        this.hotList.length + 2
      );
      ids = ids.join(",");
      //判断是否有新数据
      if (ids) {
        this.$store.dispatch("hot/getMore_idList", ids);
      } else {
        this.bottom = true;
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import url(../../assets/css/var.less);
.hot {
  padding: 0 15px;
  .movieList {
    height: 465px;
    overflow: hidden;
    width: 100%;
  }
  ul {
    li:last-of-type {
      height: 50px;
    }
    > li {
      display: flex;
      height: 114px;
      padding: 12px 0px;
      > div:nth-of-type(1) {
        img {
          width: 64px;
          height: 90px;
        }
      }
      > div:nth-of-type(2) {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: @gray-color;
        > h4 {
          color: @black-color;
          font-size: 17px;
          width: 180px;
          .textover();
          img {
            width: 43px;
            height: 14px;
          }
        }
        > p {
          width: 180px;
          .textover();
          > span {
            color: #faaf00;
            font-weight: 800;
          }
        }
      }
      > div:nth-of-type(3) {
        position: relative;
        > div {
          width: 47px;
          height: 27px;
          text-align: center;
          border-radius: 5px;
          line-height: 27px;
          position: absolute;
          color: white;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: @xs-size;
        }
        .red {
          background-color: @theme-color;
        }
        .blue {
          background-color: skyblue;
        }
      }
      h3 {
        padding-top: 10px;
        width: 100%;
        text-align: center;
        color: @gray-color;
        font-family: "楷体";
        border-top: 1px solid gray;
      }
    }
  }
}
</style>
