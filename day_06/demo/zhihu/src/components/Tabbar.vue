<template>
    <div>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="home">
                <img src="../assets/images/home_enabled.png" slot="icon" v-if="selected=='home'">
                <img src="../assets/images/home_disabled.png" slot="icon" v-else>
                首页
            </mt-tab-item>
            <mt-tab-item id="me">
                <img src="../assets/images/me_enabled.png" slot="icon"  v-if="selected=='me'">
                <img src="../assets/images/me_disabled.png" slot="icon" v-else>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    props:['active'],
    data(){
        return {
            selected:this.active
        }
    },
    watch:{
        selected(value){
            if(value == 'home'){
                this.$router.push('/');
            } else if(value == 'me'){
                this.$router.push('/me');
            }
        }
    }
}
</script>