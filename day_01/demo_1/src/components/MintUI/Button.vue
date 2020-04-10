<template>
    <div>
        <!-- 
        <p><mt-button type="default">默认</mt-button></p>
        <p><mt-button type="primary">主要</mt-button></p>
        <p><mt-button type="danger">危险</mt-button></p>
        <p><mt-button type="primary" size="small">主要</mt-button></p>
        <p><mt-button type="primary" size="normal">主要</mt-button></p>
        <p><mt-button type="primary" size="large">主要</mt-button></p>
        -->
        <p><mt-button type="primary" size="normal" icon="back">返回</mt-button></p>
        <p><mt-button type="primary" size="normal" icon="more">更多</mt-button></p>
        <p><mt-button type="primary" size="normal" icon="more" disabled>禁用</mt-button></p>
        <p>
            <mt-button type="primary" size="normal">
                <img src="../../assets/images/reload.png">
                重新加载
            </mt-button>
        </p>
         <p>
            <mt-button type="primary" size="normal" 
            
            icon="iconfont icon-shanchu3" class="custom">
                自定义图标
            </mt-button>
        </p>
    </div>
</template>
<style>
.custom .mintui-iconfont{
    font-family: 'iconfont'!important;
}
</style>
<script>
import '../../assets/styles/iconfont.css'
export default {
    
}
</script>