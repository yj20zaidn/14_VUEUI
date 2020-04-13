<template>
  <div>
      <mt-header title="关于我们" fixed>
          <router-link to="/me" slot="left">
              <mt-button icon="back"></mt-button>
          </router-link>
      </mt-header>
      <div class="main">
          <div class="logo">
              <router-link to="/">
                <img src="../assets/images/logo.svg">
              </router-link>
          </div>
          <div class="info">
              <p>北京智者天下科技有限公司</p>
              <p>北京市海淀区学院路甲 5 号 768 创意园 A 座西区四通道 3-010</p>
              <p>京 ICP 证 110745 号</p>
              <p>京 ICP 备 13052560 号 - 1</p>
          </div>
      </div>
  </div>
</template>
<style scoped>
.main{
  margin-top:40px;
  text-align: center;
}
.logo{
  padding:30px 0;
}
.info {
  line-height:2em;
}
</style>