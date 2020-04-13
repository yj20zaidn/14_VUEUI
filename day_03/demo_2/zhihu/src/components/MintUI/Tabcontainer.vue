<template>
    <div>
        <p>
            <mt-button type="primary" @click="change('tab1')">面板1</mt-button>
            <mt-button type="primary" @click="change('tab2')">面板2</mt-button>
        </p>
        <mt-tab-container v-model="selected" swipeable>
            <mt-tab-container-item id="tab1">
                <p>段落1</p>
                <p>段落1</p>
                <p>段落1</p>
                <p>段落1</p>
                <p>段落1</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <p>段落2</p>
                <p>段落2</p>
                <p>段落2</p>
                <p>段落2</p>
                <p>段落2</p>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    methods:{
        change(tabId){
            this.selected = tabId;
        }
    },
    data(){
        return {
            selected:'tab2'
        }
    }
}
</script>