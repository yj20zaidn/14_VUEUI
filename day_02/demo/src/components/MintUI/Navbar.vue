<template>
    <div>
        <p>{{ selected }}</p>
        <mt-navbar v-model="selected">
            <mt-tab-item id="a">推荐</mt-tab-item>
            <mt-tab-item id="b">生活</mt-tab-item>
            <mt-tab-item id="c">娱乐</mt-tab-item>
            <mt-tab-item id="d">汽车</mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:'a'
        }
    }
}
</script>