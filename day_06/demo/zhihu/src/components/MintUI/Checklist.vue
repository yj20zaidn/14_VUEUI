<template>
    <div>
        <p>{{loves}}</p>
        <mt-checklist title="爱好" 
                      :options="options" v-model="loves"
                      align="left">
        </mt-checklist>
    </div>
</template>
<script>
export default {
    data(){
        return {
            //默认被选定的复选框的值
            loves:['1','3'],
            //复选框列表项
            options:[
                {
                    label:'看电视',
                    value:'1'
                },
                {
                    label:'看电影',
                    value:'2'
                },
                {
                    label:'看书',
                    value:'3'
                },
                {
                    label:'睡觉',
                    value:'4'
                }
            ]
        }
    }
}
</script>