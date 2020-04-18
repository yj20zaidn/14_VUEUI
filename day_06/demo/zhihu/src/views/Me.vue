<template>
    <div>
        <mt-header title="个人中心" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <mt-cell title="个人设置" isLink to="/profile">
                <img src="../assets/images/setting.png" slot="icon">
            </mt-cell>
             <mt-cell title="关于我们" isLink to="/about">
                <img src="../assets/images/about.png" slot="icon">
            </mt-cell>
        </div>
        <div>
            <tabbar :active="active"></tabbar>
        </div>
    </div>
</template>
<script>
import Tabbar from '../components/Tabbar';
export default {
    components:{
        Tabbar
    },
    data(){
        return {
            active:'me'
        }
    }
}
</script>
<style scoped>
.main{
    margin-top:40px;
}
</style>