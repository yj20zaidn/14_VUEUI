<template>
    <div>
        <mt-button @click="simple">简捷方式提示框</mt-button>
        <mt-button @click="normal">标准方式提示框</mt-button>
    </div>
</template>
<script>
export default {
    methods:{
        simple(){
            this.$toast('提示信息');
        },
        normal(){
            this.$toast({
                message:'标准方式',
                position:'middle',
                duration:2000,
                iconClass:'iconfont icon-shanchu'
            });
        }
    }
}
</script>
<style>
.mint-toast-icon{
    font-size:20px;
    color:red;
}
</style>