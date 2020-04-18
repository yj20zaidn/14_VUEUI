<template>
    <div>
        <!-- infinite-scroll-distance:指滚动到离页面底部还有10个像素时触发加载的方法 -->
        <!-- v-infinite-scroll指滚动到离页面底部还有10个像素时触发的方法名称 -->
        <ul style="border:2px solid #f00"
            infinite-scroll-distance="10"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy">
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
        loadMore(){
            //确定loadMore()方法在执行完成前，如果再次进行滚动范围时
            //不再执行loadMore()方法
            this.busy = true;
            //通过setTimeout()方法来模拟服务器的响应
            window.setTimeout(()=>{
                //每次加载时在原来的基础上增30
                this.list += 30;
                //5秒后再次进行滚动范围时将再次触发loadMore()方法
                this.busy = false;
            },5000);
        }
    },
    data(){
        return {
            list:30,
            //为infinite-scroll-disabled属性指定默认值
            busy:false
        }
    }
}
</script>