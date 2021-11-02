<template>
  <div class="list">
    <div class="movieList">
      <div>
        <MyBanner></MyBanner>

        <ul>
          <li v-for="item in list" :key="item._id">
            <div>
              <img
                src="http://iph.href.lu/64x90?text=[图片已失效]&fg=063896&bg=ffefef"
                alt=""
              />
            </div>
            <div>
              <h4>{{ item.nm }} 3D MAX</h4>
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import MyBanner from "./MyBanner.vue";

export default {
  name: "MyList",
  data() {
    return {
      list: {},
    };
  },

  components: { MyBanner },
  created() {
    this.list = this.getListData();
  },
  methods: {
    getListData() {
      fetch("http://www.pudge.wang:3080/api/movies/list")
        .then((response) => response.json())
        .then(async (res) => {
          this.list = res.result;
          console.log(this.list);
          await this.$nextTick();
          new BetterScroll(".movieList", {
            scrollX: false,
            scrollY: true,
            click: true,
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import url(../../assets/css/var.less);
.list {
  background-color: lightblue;
  padding: 0 15px;
  .movieList {
    height: 465px;
    overflow: hidden;
    width: 100%;
  }
  ul {
    > li {
      display: flex;
      height: 114px;
      padding: 12px 0px;
      // > div:nth-of-type(1) {

      // }
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
          width: 200px;
          .textover();
        }
        > p {
          width: 200px;
          .textover();
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
    }
  }
}
</style>
