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
            <mt-tab-item id="recommend">推荐</mt-tab-item>
            <mt-tab-item id="life">生活</mt-tab-item>
            <mt-tab-item id="entertainment">娱乐</mt-tab-item>
            <mt-tab-item id="automobile">汽车</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- 顶部选项卡结束 -->
      <!-- 面板区域开始 -->
      <mt-tab-container v-model="selected" swipeable>
            <mt-tab-container-item id="recommend">
                <p v-for="(item,index) in data[selected]" :key="index">{{item.subject}}</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="life">
                <p v-for="(item,index) in data[selected]" :key="index">{{item.subject}}</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="entertainment">
                <p v-for="(item,index) in data[selected]" :key="index">{{item.subject}}</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="automobile">
                <p v-for="(item,index) in data[selected]" :key="index">{{item.subject}}</p>
            </mt-tab-container-item>
      </mt-tab-container>
      <!-- 面板区域结束 -->
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
        //名称既控制选项卡，也控制面板，还控制data中的成员
        selected:'recommend',
        //存储服务器返回的信息
        //data为对象，对象中的每个成员名称即分类的名称，其值为数组
        data:{
            //存储推存新闻
            recommend:[],
            //存储生活新闻
            life:[],
            //存储娱乐新闻
            entertainment:[],
            //存储汽车新闻
            automobile:[]
        },
    }
  },
  //监听selected属性的变化，只要发生变化就向WEB服务器发送一次AJAX请求
  watch:{
      selected(){
        //发送AJAX请求
        this.axios.get('/articles?type=' + this.selected).then(res=>{
            this.data[this.selected] = res.data.results;
            console.log(this.data);
        });
      }
  },
  mounted(){
    //向WEB服务器发送AJAX请求，以获取数据
    //此时代表向WEB服务器articles路由发送GET请求,并且接收服务器返回的数据
    this.axios.get('/articles?type=' + this.selected).then(res=>{
        //将服务器返回的信息存储到data属性中对应类型的数组内
        this.data[this.selected] = res.data.results;
        console.log(this.data);
      
    });
  }
}
</script>