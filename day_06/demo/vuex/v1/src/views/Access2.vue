<template>
    <div>
        <h1>访问数据(页面2)-V1</h1>
        <hr>
         <p>用户名：{{$store.state.username}}</p>
        <p>年龄：{{$store.state.age}}</p>
        <p>性别：{{$store.state.sex ? '男' : '女'}}</p>
        <p>工资：{{$store.state.salary}}</p>
        <p>学历：{{$store.state.extends.education}}</p>
        <p>婚否：{{$store.state.extends.isMarray ? '已婚' : '未婚'}}</p>
    </div>
</template>