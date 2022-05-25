<template>
    <div>
        <p :style="styleObject">인라인 스타일 바인딩</p>
        <p :style="[form,addStyle]">인라인 스타일 바인딩</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            styleObject:{
                color:'red',
                fontSize:'13px'
            },
            form:'background-color:yellow; width:100%; height:200px;',
            addStyle:'color:red;font-weight:bold;'
        };
    },
}
</script>