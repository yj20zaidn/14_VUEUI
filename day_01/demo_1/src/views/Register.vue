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
            <mt-field type="text" label="用户名"></mt-field>
            <mt-field type="password" label="密码"></mt-field>
            <mt-field type="password" label="确认密码"></mt-field>
        </div>
        <!-- 注册区域结束 -->
    </div>
</template>
<style scoped>
.main{
    margin-top:40px;
}
</style>