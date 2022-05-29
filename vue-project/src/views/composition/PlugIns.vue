<template>
    <div>
        <h2>{{$translate("ko.hi")}}</h2>    <!-- $translate으로 사용 -->
        <h2>{{i18n.ko.hi}}</h2>    <!-- $inject로 사용 -->
    </div>
</template>
<script>
export default {
    inject:['i18n'],
    mounted(){
        console.log(this.i18n);
    }
}
</script>