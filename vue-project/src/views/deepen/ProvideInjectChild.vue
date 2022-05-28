<template>
    <div>
        <h1>하나</h1>
        <h3>부모에서 데이터가져와서 자식에서 쓰기</h3>
        <p>{{text}}</p>
    </div>
</template>
<script>
export default {
    inject:['itemLength'],
    data(){
        return {
            text:this.itemLength
        }
    },
    mounted() {
        console.log(this.itemLength);
    },
}
</script>