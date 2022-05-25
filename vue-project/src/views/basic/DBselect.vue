<template>
    <div>
        <select v-model="city" name="" id="">
            <option value="02">서울</option>
            <option value="032">인천</option>
            <option value="031">경기</option>
        </select>
    </div>
</template>
<script>
export default {
    data(){
        return {
            city:"032"
        };
    },
}
</script>