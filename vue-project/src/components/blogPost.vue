<template>
    <div>
        <p>정적 숫자형 전달 : {{likes}}</p>
        <p>동적 숫자형 전달 : {{likes2}}</p>
    </div>
</template>
<script>
export default {
    props:{
        likes:{
            type:Number,
            default:3
        },
        likes2:{
            type:Number,
            default:3
        }

    }
}
</script>