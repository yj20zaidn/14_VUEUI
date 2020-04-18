<template>
    <div>
        <mt-header title="个人设置" fixed>
            <router-link to="/me" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <p>姓名:{{$store.state.username}}</p>
            <p>上次登录日期:2020年04月11日 15:29:36</p>
            <p>发表的文章数量:300篇</p>
        </div>
    </div>
</template>
<style scoped>
.main{
    margin-top:50px;
    margin-left:10px;
}
.main p{
    line-height:2em;
}
</style>