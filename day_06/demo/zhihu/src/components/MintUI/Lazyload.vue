<template>
    <div>
        <ul class="ad">
            <li v-for="(image,index) in images" :key="index">
                <img v-lazy="image">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            //存储通过require加载后的图像
            images:[]
        }
    }, 
    mounted(){
        //通过循环结构动态加载图像
        for(var n=1;n<7;n++){
            var imageName = n + '.jpg';
            this.images.push(require('../../assets/images/' + imageName));
        }
    }
}
</script>
<style scoped>
.ad img{
    width:100%;
    display:block;
}
.ad img[lazy=loading]{
    width:100%;
    height:100px;
}
</style>