<template>
  <div class="detail">
    <myheader :title="detail.nm"></myheader>
    <mylogo></mylogo>
    <div class="top">
      <img :src="detail.img | changeImgSrc" alt="" />
      <div class="right">
        <h3>{{ detail.nm }}</h3>
        <p>{{ detail.filmAlias }}</p>
        <p><span>8.6</span>(5.8万人评)</p>
        <p>{{ detail.cat }}</p>
        <p></p>
        <p>{{ detail.pubDesc }}</p>
      </div>
    </div>
    <div class="tab">
      <span>今天11月08日</span><span>今天11月09日</span
      ><span>今天11月10日</span>
    </div>
    <div class="bottom">
      <div v-for="item in 10" :key="item">
        <h3>金逸影城（鞍山万象汇店）</h3>

        <p>铁东区建国南路700万象汇购物中心5层</p>
        <div class="">
          <div
            style="color: rgb(87, 157, 175); border-color: rgb(87, 157, 175)"
          >
            改签
          </div>
          <div style="color: rgb(255, 153, 0); border-color: rgb(255, 153, 0)">
            折扣卡
          </div>
          <div
            style="color: rgb(87, 157, 175); border-color: rgb(87, 157, 175)"
          >
            杜比全景声厅
          </div>
          <div
            style="color: rgb(87, 157, 175); border-color: rgb(87, 157, 175)"
          >
            儿童厅
          </div>
        </div>
        <div data-b><span>近期场次: 20:25</span></div>
        <div>30<span>元起</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import mylogo from "../components/common/Logo.vue";
import myheader from "../components/common/Header.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: { mylogo, myheader },
  props: ["movieid"],
  created() {
    this.$store.dispatch("detail/getMovieDetail", this.movieid);
  },
  computed: {
    ...mapState("detail", ["detail"]),
  },
  mounted() {},
  filters: {
    //过滤img 的src
    changeImgSrc(src) {
      if (src) {
        return (src = src.replace(/\/w\.h/, ""));
      }
    },
  },
};
</script>

<style lang='less' scoped>
.detail {
  .top {
    height: 189px;
    width: 100%;
    padding: 19px 15px;
    background-color: #777;
    color: white;
    img {
      height: 150px;
      width: 110px;
      float: left;
      margin-right: 10px;
    }
    .right {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-size: 20px;
        height: 20px;
        margin-top: 2px;
      }
      p {
        font-size: 12px;
        font-size: 12px;
        margin-top: 10px;
        > span {
          font-size: 18px;
          color: #fc0;
        }
      }
      p:nth-of-type(2) {
        height: 18px;
      }
    }
  }
  .tab {
    height: 45px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    line-height: 45px;
  }

  .bottom {
    height: 321px;
    overflow: auto;
    > div {
      position: relative;
      margin: 20px 0;
      width: 100%;
      height: 120px;
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 13px;
        color: #666;
      }
      div:nth-of-type(1) {
        > div {
          float: left;
          border-radius: 3px;
          border: 1px solid;
          font-size: 12px;
          margin-right: 5px;
        }
      }
      > div:nth-of-type(2) {
        height: 18px;
        font-size: 12px;
        line-height: 18px;
        color: #ccc;
      }
      > div:nth-of-type(3) {
        position: absolute;
        font-size: 18px;

        right: 10%;
        top: 35%;
        color: red;
        > span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>