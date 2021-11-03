<template>
  <div class="banner">
    <p>最受好评电影</p>
    <div class="wrapper">
      <ul>
        <li v-for="item in list" :key="item.id">
          <div>
            <img :src="item.imgUrl" alt="" />
            <p v-if="item.score">观众评分{{ item.score }}</p>
            <p v-else>{{ item.wishNum }}人想看</p>
          </div>
          <h2>{{ item.title }}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "MyBanner",
  data() {
    return {
      list: {},
    };
  },
  created() {
    this.getBannerData();
  },
  mounted() {},
  methods: {
    getBannerData() {
      fetch("http://www.pudge.wang:3080/api/rated/list")
        .then((response) => response.json())
        .then(async (res) => {
          this.list = res.result;

          await this.$nextTick();
          new BetterScroll(".wrapper", {
            scrollX: true,
            scrollY: false,
            click: true,
          });
        });
    },
  },
};
</script>

<style lang='less' scoped>
@import url(../../assets/css/var.less);
.banner {
  // background-color: pink;

  > p {
    font-size: @s-size;
    color: @black-color;
    margin-bottom: 12px;
  }
  .wrapper {
    height: 135px;
    width: 100%;
    overflow: hidden;
  }
  ul {
    // overflow: auto;
    // display: flex;
    display: inline-flex;
    li {
      width: 85px;
      margin: 0 5px;
      div {
        width: 85px;
        height: 115px;
        position: relative;
        > img {
          width: 85px;
          height: 115px;
        }
        > p {
          width: 100%;
          position: absolute;
          bottom: 2px;

          height: 16px;
          background-image: linear-gradient(to bottom, grey, black);
          font-size: 11px;
          padding-left: 4px;
          color: #faaf00;
          font-weight: 800;
        }
      }
      h2 {
        margin-top: 5px;
        font-size: 13px;
        color: @black-color;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>