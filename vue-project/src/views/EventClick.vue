<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The counter is : {{num}}</p>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The counter is : {{counter}}</p>
        <button type="button" @click="one(),two()">Click</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:0,
            counter:0,
        };
    },
    methods:{
        increaseCounter(){
            this.num = this.num+1;
        },
        setCount(counter){
            this.counter = counter
        },
        one(){
            alert('One');
        },
        two(){
            alert('Two');
        }
    }
}
</script>