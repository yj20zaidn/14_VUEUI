<template>
    <div>
        <mt-cell title="蓝牙" label="备注信息">
            <mt-switch v-model="blue"></mt-switch>
        </mt-cell>
         <mt-cell title="蓝牙" label="备注信息" icon="more">
            <mt-switch v-model="blue"></mt-switch>
        </mt-cell>
        <mt-cell title="蓝牙" label="备注信息" icon="back">
            <mt-switch v-model="blue"></mt-switch>
        </mt-cell>
        <mt-cell title="蓝牙">
            <mt-switch v-model="blue"></mt-switch>
            <img src="../../assets/images/blue.png" slot="icon">
        </mt-cell>
        <mt-cell title="红包" isLink to="/">
            <img src="../../assets/images/hongbao.png" slot="icon">
        </mt-cell>
    </div>
</template>
<script>
export default {
    data(){
        return {
            blue:true
        }
    }
}
</script>