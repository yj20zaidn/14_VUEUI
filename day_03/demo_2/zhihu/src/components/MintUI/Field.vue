<template>
    <div>
        <mt-field type="text" 
                  label="用户名" 
                  placeholder="请输入用户名"
                  v-model="username">
        </mt-field>
        <mt-field type="password" 
                  label="密码" 
                  placeholder="请输入密码"
                  v-model="password">
        </mt-field>
        <mt-field type="password" 
                  label="确认密码" 
                  placeholder="请再次输入密码"
                  v-model="conpassword">
        </mt-field>
        <mt-button type="primary" size="large" @click="register">
            免费注册
        </mt-button>
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
            //课后作业:通过正则表达式检测用户名、密码、确认密码的合法性
            //1.用户名长度必须为6~12位之间的字母、数字及下划线的组合
            //2.密码长度必须为8~12位之间的字母、数字及下划线的组合
            //3.两次密码必须一致
            //4.检测成功后直接在控制台输出相关的信息,如果检测失败，则显示
            //相应的短消息提示框 
            console.log('用户名:' + this.username);
            console.log('密码:' + this.password);
            console.log('确认密码:' + this.conpassword);
        }
    }

}
</script>