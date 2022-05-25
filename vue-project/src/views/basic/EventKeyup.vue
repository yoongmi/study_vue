<template>
    <div>
        <input @keyup.enter="submit" value="ENTER"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            sampleData: ''
        };
    },
    methods: {
        submit(){
            alert('enter!!')
        }
    }
}
</script>
