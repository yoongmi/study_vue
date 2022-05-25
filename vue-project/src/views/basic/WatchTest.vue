<template>
    <div>
        <h1>Full Name : {{firstName+' '+lastName}}</h1>
        <h1>Full Name : {{fullName}}</h1>
        <button type="button" @click="changeName">변경</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            firstName:'Seungwon',
            lastName:'Go',
            fullname:''
        };
    },
    watch:{
        firstName(){
            this.fullName = this.firstName+' '+this.lastName;
        },
        lastName(){
            this.fullName = this.firstName+' '+this.lastName;
        }
    },
    methods:{
        changeName(){
            this.firstName='Eunsol';
        }
    }
}
</script>