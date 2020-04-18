<template>
    <div>
        <h1>增加虚拟(页面1)-V1</h1>
        <hr>
        <table width="400" cellpadding="10" cellspacing="0" border="1" align="center">
            <tr>
                <td>商品名称</td>
                <td><input type="text" v-model="productName"></td>
            </tr>
            <tr>
                <td>销售价格</td>
                <td><input type="text" v-model="salePrice"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button @click="add">确认添加</button>
                </td>
               
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            productName:'',
            salePrice:0
        }
    },
    methods:{
        add(){
            var object = {
                productName:this.productName,
                salePrice:this.salePrice
            }
            //此处的object在VUEX中称为payload(提交载荷)
            this.$store.commit('sAdd',object);
        }
    }
}
</script>