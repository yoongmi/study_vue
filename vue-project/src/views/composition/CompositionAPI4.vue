<template>
    <div>
        <h2>Calculator4</h2>
        <div>
            <input type="text" v-model="num1" v-focus>
            <span> + </span>
            <input type="text" v-model="num2">
            <span> = </span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
import {plusCalculator} from './commons.js';
export default {
    name: 'CalcuLator',
    setup(){
        let {num1,num2,result}=plusCalculator(); //외부 function
        return{
            num1,num2,result
        }
    }
}
</script>