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
    <!-- <div
      @click="getAddress"
      class="citiesList"
      v-for="(item, index) in list"
      :key="index"
    >
      <h6>{{ item.prefix.toUpperCase() }}</h6>
      <p v-for="city in item.cities" :key="city.cityId">{{ city.name }}</p>
    </div> -->
    <!-- <van-index-bar
      @click="getAddress"
      class="citiesList"
      v-for="(item, index) in list"
      :key="index"
    >
      <van-index-anchor :index="item.prefix.toUpperCase()" />
      <van-cell
        class="p"
        :title="city.name"
        v-for="city in item.cities"
        :key="city.cityId"
      /> -->
    <van-index-bar :index-list="indexList">
      <div
        @click="getAddress"
        class="citiesList"
        v-for="(item, index) in list"
        :key="index"
      >
        <van-index-anchor :index="item.prefix.toUpperCase()">{{
          item.prefix.toUpperCase()
        }}</van-index-anchor>
        <van-cell
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
export default {
  name: "Address",
  data() {
    return {
      list: [],
      hotcity: {},
      indexList: ["A", "C", "D", "W", "E", "R", "T", "U"],
    };
  },
  created() {
    fetch("http://www.pudge.wang:3080/api/area/list")
      .then((Response) => {
        return Response.json();
      })
      .then((res) => {
        this.list = res.result;
       
        this.$nextTick(() => {
          this.hotcity = this.list.shift();
         
          console.log(this.list);
          this.list.forEach((ele)=>{
           this.indexList.push( ele.prefix.toUpperCase())
          })
        });
      });
  },
  mounted() {},
  methods: {
    getAddress(e) {
      if (e.target.nodeName == "SPAN" || e.target.nodeName == "P") {
        this.$bus.$emit("getAddress", e.target.innerHTML);
        console.log("    getAddress 事件触发了");
        this.$router.push({
          path: "/",
          query: {},
        });
      }
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
      }
    }
  }
}
</style>
