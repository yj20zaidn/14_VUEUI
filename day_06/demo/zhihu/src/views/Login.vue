<template>
    <div>
        <!-- 头部区域开始 -->
        <mt-header title="有问题，上知乎" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
        </mt-header>
        <!-- 头部区域结束 -->
        <!-- 注册区域开始 -->
        <div class="main">
            <mt-field type="text" label="用户名" v-model="username">
            </mt-field>

            <mt-field type="password" label="密码" v-model="password">

            </mt-field>
            <mt-button type="primary" size="large" @click="login">
                快速登录
            </mt-button>
        </div>
        <!-- 注册区域结束 -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            this.axios.post('/login','username=' + this.username + '&password=' + this.password).then(res=>{
                //获取服务器的响应代码
                var code = res.data.code;
                if(code == 0){ //登录失败
                    this.$messagebox.alert('用户名或密码错误','登录失败');
                } else { //登录成功
                    //修改state的状态
                    this.$store.commit('logined',this.username);
                    this.$router.push('/');
                }
            });
        }
    }
}
</script>
<style scoped>
.main{
    margin-top:40px;
}
</style>