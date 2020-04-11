<template>
  <div>
      <!-- 头部区域开始 -->
      <mt-header title="有问题，上知乎" fixed>
          <router-link to="/" slot="right">
              <mt-button>登录</mt-button>
          </router-link>
      </mt-header>
      <!-- 头部区域结束 -->
     
      <!-- 顶部选项卡开始 -->
      <div class="navbar">
        <mt-navbar v-model="selected">
            <mt-tab-item id="a">推荐</mt-tab-item>
            <mt-tab-item id="b">生活</mt-tab-item>
            <mt-tab-item id="c">娱乐</mt-tab-item>
            <mt-tab-item id="d">汽车</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- 顶部选项卡结束 -->
   
  </div>
</template>
<style  scoped>
.navbar{
  margin-top:40px;
}
</style>
<script>
export default {
  data(){
    return {
        selected:'a'
    }
  }
}
</script>