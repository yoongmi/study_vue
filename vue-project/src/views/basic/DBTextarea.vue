<template>
    <div>
        <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message: "여러 줄을 입력할 수 있는 textarea 입니다"
        };
    }
}
</script>