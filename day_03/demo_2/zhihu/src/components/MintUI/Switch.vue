<template>
    <div>
        <p>{{allow}}</p>
        <mt-switch v-model="allow">
            是否接收消息提示
        </mt-switch>
    </div>
</template>
<script>
export default {
    data(){
        return {
            allow:false
        }
    }
}
</script>