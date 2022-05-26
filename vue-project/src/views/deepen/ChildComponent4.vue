<template>
    <h1>{{msg}}</h1>
</template>
<script>
export default {
    data(){
        return {
            msg: '이거는 자식컴포넌트에서 보내는 메세지여'
        }
    },
    mounted(){
        this.$emit('send-message',this.msg)
    }
}
</script>