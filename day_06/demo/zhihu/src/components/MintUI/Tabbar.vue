<template>
    <div>
        <mt-tabbar v-model="active">
            <mt-tab-item id="home">
                <img src="../../assets/images/home_enabled.png" slot="icon" v-if="active=='home'">
                <img src="../../assets/images/home_disabled.png" slot="icon" v-else>
                首页
            </mt-tab-item>
            <mt-tab-item id="me">
                <img src="../../assets/images/me_enabled.png" slot="icon"  v-if="active=='me'">
                 <img src="../../assets/images/me_disabled.png" slot="icon" v-else>
                我的
            </mt-tab-item>
            <mt-tab-item id="store">
                <img src="../../assets/images/store_enabled.png" slot="icon" v-if="active=='store'">
                <img src="../../assets/images/store_disabled.png" slot="icon" v-else>
                购物车
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:"me"
        }
    }
}
</script>