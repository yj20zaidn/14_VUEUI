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
            <mt-field 
                type="text" 
                label="用户名" 
                v-model="username">
            </mt-field>

            <mt-field type="password" label="密码" v-model="password">

            </mt-field>
            <mt-field type="password" label="确认密码" v-model="conpassword"></mt-field>
            <mt-button type="primary" size="large" @click="register">
                免费注册
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
            password:'',
            conpassword:''
        }
    },
    methods:{
        register(){
            var usernameExp = /^[a-zA-Z0-9_]{6,12}$/
            if(!usernameExp.test(this.username)){
                this.$toast({
                    message:'用户名必须为字母、数字的组合',
                    position:'middle',
                    duration:3000
                });
                return false;
            } 
            //检测密码的规范
            var passwordExp = /^[a-zA-Z0-9_]{8,12}$/
            if(!passwordExp.test(this.password)){
                this.$toast({
                    message:'密码必须为字母、数字的组合',
                    position:'middle',
                    duration:3000
                });
                return false;
            } 
            //此时要向WEB服务器发送AJAX请求了
           this.axios.post('/register','username=' + this.username +　'&password=' + this.password).then(res=>{
               var code = res.data.code;
               //根据服务器的响应信息，显示不同的注册结果
                if(code == 0){
                    this.$messagebox('注册提示','对不起，该用户已存在');
                } else {
                    this.$messagebox.confirm('用户注册成功，是否立即登录？','注册成功',{
                        confirmButtonText:'是',
                        cancelButtonText:'否'
                    })
                    .then(action=>{
                        this.$router.push('/login');
                    }).catch(err=>{
                        this.$router.push('/');
                    });
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