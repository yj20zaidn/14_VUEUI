<template>
    <div>
        <p><mt-button @click="simple">简捷方式</mt-button></p>
        <p><mt-button @click="normal">标准方式</mt-button></p>
    </div>
</template>
<script>
export default {
    methods:{
        simple(){
            this.$indicator.open('加载中...');
            setTimeout(()=>{
                this.$indicator.close();
            },5000);
        },
        normal(){
            this.$indicator.open({
                text:'请稍候...',
                spinnerType:'triple-bounce'
            });   
        }
    }
}
</script>