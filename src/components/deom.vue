<template>
    <div class="body">
<!--        {{n}}-->
<!--        <button @click="add">点击+1</button>-->
        {{message}}
    </div>
</template>

<script>
    export default {
        props:['message']
    }
</script>

<style >
    .body{
        color: red;
    }
</style>