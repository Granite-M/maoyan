<template>
  <div class="Address">
    <h6>定位城市</h6>
    <div class="err"><span>定位失败点击重试</span></div>
    <h6>最近访问城市</h6>
    <div @click="getAddress" class="lastViewCity">
      <span v-for="i in 6" :key="i">广州</span>
    </div>
    <h6>热门城市</h6>
    <div @click="getAddress" class="HotCity">
      <span v-for="item in hotcity.cities" :key="item.cityId">{{
        item.name
      }}</span>
    </div>
    <van-index-bar :index-list="indexList">
      <div class="citiesList" v-for="(item, index) in list" :key="index">
        <van-index-anchor :index="item.prefix.toUpperCase()">{{
          item.prefix.toUpperCase()
        }}</van-index-anchor>
        <van-cell
          @click="setAddress(city.name)"
          class="p"
          :title="city.name"
          v-for="city in item.cities"
          :key="city.cityId"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Address",
  data() {
    return {
      list: [],
      hotcity: {},
      indexList: [],
    };
  },
  created() {
    this.list = this.addressList;
    this.hotcity = this.list.shift();
    this.list.forEach((ele) => this.indexList.push(ele.prefix.toUpperCase()));
  },
  mounted() {},
  computed: {
    ...mapState("address", ["addressList"]),
  },
  methods: {
    getAddress(e) {
      if (e.target.nodeName == "SPAN" || e.target.nodeName == "P") {
        localStorage.setItem("address", e.target.innerHTML);
        this.$router.push({
          path: "/",
          query: {},
        });
      }
    },
    setAddress(name) {
      localStorage.setItem("address", name);
      this.$router.push({
        path: "/",
        query: {},
      });
    },
  },
};
</script>

 <style lang="less" scoped>
@import url(../assets/css/var.less);
.Address {
  user-select: none;
  font-size: @s-size;
  background-color: #ebebeb;
  h6 {
    color: @black-color;
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
  }
  span {
    height: 33px;
    display: inline-block;
    margin-top: 15px;
    margin-left: 13px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    line-height: 31px;
    background-color: #fff;
  }
  > div {
    padding-bottom: 8px;
    background-color: #f5f5f5;
  }
  .citiesList {
    > h6 {
      background-color: #ebebeb;
    }
    .p {
      border-bottom: 1px solid #c8c7cc;
      height: 45px;
      line-height: 44px;
      span {
        display: inline !important;
        padding: 0;
        margin: 0;
        border: none;
        position: relative;
        bottom: 10px;
      }
    }
  }
}
</style>
