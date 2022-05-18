<template>
    <div>
        <label for=""><input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{checked}}</label>
        <br>
        <label for=""><input type="checkbox" value="서울" v-model="checktext">서울</label>
        <label for=""><input type="checkbox" value="부산" v-model="checktext">부산</label>
        <label for=""><input type="checkbox" value="제주" v-model="checktext">제주</label>
        <br>
        <span>체크한 지역 : {{checktext}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            checked:true,
            checktext:[]
        };
    },
}
</script>