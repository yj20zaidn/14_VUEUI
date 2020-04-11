<template>
    <div>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <mt-button type="primary" @click="simple">简捷提示框</mt-button>
        <mt-button type="primary" @click="normal">标准提示框</mt-button>
        <mt-button type="primary" @click="confirm">确认提示框</mt-button>
        <mt-button type="primary" @click="prompt">输入提示框</mt-button>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
    </div>
</template>
<script>
export default {
    methods:{
        prompt(){
            this.$messagebox.prompt('请输入QQ群名称:','新建QQ群',{
                inputType:'text',
                inputPlaceholder:'QQ群名称'
            }).then(action=>{
                console.log(action);
            }).catch(err=>{

            });
        },
        simple(){
            this.$messagebox('标题','提示内容');
        },
        normal(){
            this.$messagebox.alert('提示内容','标题');
        },
        confirm(){
            this.$messagebox.confirm('提示内容','标题',{
                confirmButtonText:'OK',
                confirmButtonHighLight:true,
                cancelButtonText:'Cancel',
                cancelButtonHighLight:true,
                //是否在单击遮罩层时关闭对话框
                closeOnClickModal:false,
                //是否允许通过键盘ESC按钮关闭对话框
                closeOnPressEscape:false,
                //是否锁定滚动条
                lockScroll:true
            }).then(action=>{
                console.log(action);
            }).catch(err=>{

            });
        }
    }
}
</script>
<style>
.mint-msgbox-confirm{
    color: #F00 !important;
}
.mint-msgbox-confirm:active {
    
    font-weight: bold;
}

.mint-msgbox-cancel:active {
    color: #0563a9;
    font-weight: bold;
}
</style>