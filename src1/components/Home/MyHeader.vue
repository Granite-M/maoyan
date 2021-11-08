<template>
  <header>
    <div class="top">
      <div class="left">猫眼电影</div>
      <div @click="change = !change" class="right">
        <ul v-show="change">
          <li @click="fn(item)" v-for="(item, index) in menuList" :key="index">{{ item }}</li>
        </ul>

       <span class="iconfont icon-daohang"></span>
      </div>
    </div>
   
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      change: false,
      menuList: ["首页", "榜单", "热点", "商城"],
    };
  },
    methods: {
      fn(ele){
        console.log(ele);
      }
    },
};
</script>

<style lang='less' scoped>
@import url(../../assets/css/var.less);

.top > {
  .center();

  height: 51px;
  font-size: @l-size;
  background-color: @theme-color;
  color: white;
  .left {
    margin-left: 50px;
    width: 270px;
    text-align: center;
  }
  .right {
    width: 50px;
    position: relative;
    text-align: center;
    ul>{
      position: absolute;
      background-color: #fff;
      border: solid 1px @border-color;
      color: grey ;
      top: 30px;
      right: 10px;
           z-index: 20;
     li {
        width: 110px;
        height: 45px  ; 
        text-align: center; 
        line-height: 45px;
        color: #333;
        font-size: 15px;
        border-bottom: 1px solid #ddd;
      }
    }
  }
}

</style>