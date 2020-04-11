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
                v-model="username"
                @blur.native.capture="register">
            </mt-field>

            <mt-field type="password" label="密码" v-model="password"></mt-field>
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
            //1.用户名长度必须为6~12位之间的字母、数字及下划线的组合
            //2.密码长度必须为8~12位之间的字母、数字及下划线的组合
            //3.两次密码必须一致
            //4.检测成功后直接在控制台输出相关的信息,如果检测失败，则显示
            //相应的短消息提示框 
            //检测用户名的规范
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
            } 
            //return false;
        }
    }
}
</script>
<style scoped>
.main{
    margin-top:40px;
}
</style>