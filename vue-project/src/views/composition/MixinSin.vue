<template>
    <div>하나</div>
</template>
<script>
import ApiMixin from './api.js'
export default {
    mixins:[ApiMixin],
    data(){
        return{
            productLIst:[]
        }
    },
    async mounted(){
        this.productList = await this.$callAPI("https://6653eabe-cc23-4598-b3f1-0cbdb055328a.mock.pstmn.io/list","get");
        console.log(this.productList)
    }
    // mounted(){
    //     console.log('하나')
    // },
    // unmounted(){        // mounted 보다 먼저실행됨
    //     console.log('하나나난나나나ㅏ')
    // }
}
</script>