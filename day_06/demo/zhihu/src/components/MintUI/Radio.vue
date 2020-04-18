<template>
    <div>
        <p>{{ sex }}</p>
        <mt-radio title="性别" :options="options" v-model="sex" align="left">
        </mt-radio>
    </div>
</template>
<script>
export default {
    data(){
        return {
            //默认被选定的单选项的值
            sex:'1',
            //单选框列表项
            options:[
                {
                    label:'男',
                    value:'0'
                },
                {
                    label:'女',
                    value:'1'
                },
                {
                    label:'保密',
                    value:'2'
                }
            ]
        }
    }
}
</script>