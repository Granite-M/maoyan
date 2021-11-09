<template>
  <div class="cinema">
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

export default {
  data() {
    return {};
  },
  props: ["title", "homeIndex"],
};
</script>
<style lang="less" scoped>
.cinema {
  .tab {
    height: 45px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    line-height: 45px;
  }
  .bottom {
    height: 420px;
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
