<template>
  <div class="banner">
    <p>最受好评电影</p>
    <div class="wrapper">
      <ul>
        <li v-for="item in bannerMoviesList" :key="item.id">
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
import { mapState } from "vuex";
export default {
  name: "MyBanner",
  created() {
    this.$nextTick(() => {
      new BetterScroll(".wrapper", {
        scrollX: true,
        scrollY: false,
        click: true,
        mouseWheel: true, //开启鼠标滚轮
        disableTouch: false, //启用手指触摸
        // disableMouse: false, //启用鼠标拖动
      });
    });
  },
  computed: {
    ...mapState('hot',["bannerMoviesList"]),
  },
};
</script>
<style lang='less' scoped>
@import url(../../assets/css/var.less);
.banner {
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
    width: 1140px;
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