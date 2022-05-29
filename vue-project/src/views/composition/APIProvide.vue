<template>
    <APIInject />
</template>
<script>
import {provide} from 'vue';
import APIInject from './APIInject.vue'
export default {
    components: {APIInject},
    setup(){
        provide('title','provide 함수를 통해 전달하는 값이당');
        // provide 함수를 통해서 전달할 키(key), 값(value) 설정
    }
}
</script>