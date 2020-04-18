<template>
    <div>
        <h1>修改年龄-V1</h1>
        <hr>
        <p>年龄：{{this.$store.state.age}}</p>
        <hr>
        <p>
            <button @click="inc">增加年龄</button>
            <button @click="dec">减少年龄</button>
        </p>
    </div>
</template>
<script>
export default {
    methods:{
        inc(){
           //调用store中Mutations内的sIncrement方法
           //跟进货员说：来进货
           this.$store.commit('sIncrement');
        },
        dec(){
           //调用store中Mutations内的sDecrement方法
            //跟出货员说：来出货
           this.$store.commit('sDecrement');
        }
    }
}
</script>