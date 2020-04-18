<template>
    <div>
        <h1>访问数据(页面1)-V1</h1>
        <hr>
        <p>用户名：{{this.$store.state.username}}</p>
        <p>年龄：{{this.$store.state.age}}</p>
        <p>性别：{{this.$store.state.sex ? '男' : '女'}}</p>
        <p>工资：{{this.$store.state.salary}}</p>
        <p>学历：{{this.$store.state.extends.education}}</p>
        <p>婚否：{{this.$store.state.extends.isMarray ? '已婚' : '未婚'}}</p>
        <hr>

        <h2>库存在中有 {{this.$store.getters.getNums}} 件商品，列表如下:</h2>
        
        <p v-for="(item,index) in this.$store.state.products" :key="index">
            商品ID：{{ ++index }}
            商品名称:{{ item.productName }}
            销售价格：{{ item.salePrice }}
        </p>
    </div>
</template>