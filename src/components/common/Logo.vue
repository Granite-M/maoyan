<template>
  <div class="logo">
    <a href=""><img src="@/assets/img/logo.png" alt="" /></a>
    <span>发现最新最热电影</span>
    <a href="">打开App <span class="">&gt;</span> </a>
  </div>
</template>
<script>
export default {
  name: "MyLogo",
  data() {
    return {};
  },
};
</script>
<style lang='less' scoped>
@import url(../../assets/css/var.less);
.logo {
  width: 375px;
  height: 60px;
  border-bottom: solid 1px @border-color;
  font-size: @s-size;
  line-height: 60px;
  font-weight: 800;
  > span {
    margin-left: 70px;
    margin-right: 10px;
  }
  a {
    font-size: @m-size;
    color: #b37e7e;
    line-height: 60px;
    img {
      width: 94px;
      height: 39px;
      position: relative;
      top: 12px;
      left: 10px;
    }
  }
}
</style>