<template>
  <div>
      <!-- 头部区域开始 -->
      <mt-header title="有问题，上知乎" fixed>
          <!-- 用户没有登录 -->
          <div  slot="right" class="shortcut" v-if="!$store.state.isLogined">
            <router-link to="/register">
                <mt-button>注册</mt-button>
            </router-link>
            <router-link to="/login">
                <mt-button>登录</mt-button>
            </router-link>
          </div>
          <!-- 用户已登录 -->
          <mt-button slot="right" v-else @click="logout">
              <img src="../assets/images/logout.png" slot="icon">
          </mt-button>
      </mt-header>
      <!-- 头部区域结束 -->
     
      <!-- 顶部选项卡开始 -->
      <div class="navbar">
        <mt-navbar v-model="selected">
            <mt-tab-item 
            v-for="(category,index) in categories" 
            :key="index"
            :id="category.category_info">
            {{category.category_name}}
            </mt-tab-item>
        </mt-navbar>
      </div>
      <!-- 顶部选项卡结束 -->
      <!-- 面板区域开始 -->
      <div class="main"
          infinite-scroll-distance="10"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          :infinite-scroll-immediate-check="true">
      <mt-tab-container v-model="selected" value="life">

          <mt-tab-container-item 
          v-for="(category,index) in categories"
          :key = "index"
          :id="category.category_info">
             
                  <!-- 文章列表开始 -->
                <div class="infoItem" v-for="(item,index) in data" :key="index">
                    <div class="infoItemHead">
                        {{item.subject}}
                    </div>
                    <!--正文开始-->
                    <div class="infoItemContent">
                        <img v-lazy="item.image" class="infoItemImg" v-if="item.image != null">
                        <div class="infoItemDes">{{item.description}}</div>
                    </div>
                    <!--正文结束-->
                </div>
                <!-- 文章列表结束 -->
              
          </mt-tab-container-item>
      </mt-tab-container>
      </div>
      <!-- 面板区域结束 -->
      <!-- 底部选项卡开始 -->
      <div>
            <tabbar :active="active"></tabbar>
      </div>
      <!-- 底部选项卡结束 -->
  </div>
</template>
<script>
//导入子组件
import Tabbar from '../components/Tabbar';
export default {
  //注册子组件
  components:{
      Tabbar
  },
  methods:{
        //注销
        logout(){
            //修改state的状态
            this.$store.commit('logout');
        },
        //向下滚动时触发的加载更多的函数
        loadMore(){
            //代表现在服务器正在进行处理
            this.busy = true;
            //当前页码 + 1
            this.page ++;
            //判断当前页码是否小于等于总页数
            if(this.page <= this.pagecount){
                //加载数据
                this.loadData(this.selected,this.page);
            }
        },
        //发现loadMore、watch、mounted中存在相同的AJAX请求
        //所以其封装自定义函数 loadData，然后分别在这个三个函数中进行调用
        //函数的作用是：从服务器获取某一个分类下的第几页的数据
        loadData(type,page){
            //因为现在要从服务器获取数据，因为网络环境问题，所以出现加载提示框
            this.$indicator.open('加载中...');
            //现在要向WEB服务器获取哪个分类下的第几页的数据了
            this.axios.get('/articles?type=' +  type +'&page=' + page).then(res=>{
                    //接收服务器返回的数据
                    var data = res.data.results;
                    //将服务器返回的pagecount属性值赋予变量pagecount
                    this.pagecount = res.data.pagecount;
                    //动态加载图像
                    data.forEach(item=>{
                        //因为数据表中image字段可为空,所以需要进行判断
                        if(item.image != null) {
                            item.image = require('../assets/images/zhihu/' + item.image);
                        }
                        //将当前的item添到加this.data数组中
                        this.data.push(item);
                    });    
                    //关闭加载提示框
                    this.$indicator.close();  
                    //继续处理滚动操作
                    this.busy = false;
            });   
        }
  },
  data(){
    return {
        //存储默认的页码(或者说是页码的初始值)
        page:1,
        //用户存储文章的分类信息
        categories:[],
        //名称既控制选项卡，也控制面板，还控制data中的成员
        selected:'recommend',
        //存储服务器返回的信息
        //data为对象，对象中的每个成员名称即分类的名称，其值为数组
        data:[],
        //存储总页数
        pagecount:0,
        //控制当上一次滚动方法没有执行完成时，既使再次进行滚动距离
        //也不再触发滚动方法
        busy:false,
        //当前被激活的底部选项卡
        active:'home'
    }
  },
  //监听selected属性的变化，只要发生变化就向WEB服务器发送一次AJAX请求
  watch:{
      selected(){
        //清空之前任何面板保留的数据
        this.data = [];
        //当前页码从1开始编号
        this.page = 1;
        //通过loadData()函数获取数据
        this.loadData(this.selected,this.page);
      }
  },
  mounted(){
    //向WEB服务器发送AJAX请求，以获取分类数据
    this.axios.get('/categories').then(res=>{
        this.categories = res.data.results;
        //因为返回观察者对象(observer),而并且标准JSON对象
        //所以先需要通过JSON.stringify转换成JSON字符串
        //然后再通过JSON.parse转换成标准的JSON对象
        this.selected = this.categories[0].category_info;
    });

    //通过loadData()函数获取数据
    this.loadData(this.selected,this.page);
  }
}
</script>
<style  scoped>
.shortcut a{
    color:#fff;
}
.main{
    margin-bottom:55px;
}
.navbar{
  margin-top:40px;
}

.infoItem {
    padding: 15px 0 14px;
    margin: 0 15px;
    border-bottom: .5px solid #d3d3d3;
}
.infoItemHead{
	font-weight: 600;
    font-size: 17px;
    color: #1a1a1a;
    line-height: 22px;
}
.infoItemContent {
    display: -ms-flexbox;
    display: flex;
    padding-top: 11px;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
}

.infoItemImg{
    width: 112px;
    border-radius: 5px;
    margin-right:15px;
}
.infoItemDes{
    font-size: 15px;
    overflow: hidden;
    font-weight: 400;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 21px;
    letter-spacing: normal;
    color: #444;
    margin-right: 4px 15px;
    -webkit-box-orient: vertical;
    height: 65px;
}
</style>