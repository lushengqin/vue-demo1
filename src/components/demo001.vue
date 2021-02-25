<template>
    <div class="body">
        {{n}}
        <button @click="add">点击+1</button>
    </div>
</template>

<script>
export default {
    name:'demo001',
    data(){
        return{
            n:0
        }
    },
    methods:{
        add(){
            this.n +=1
        }
    }
}
</script>

<style >
    .body{
        color: red;
    }
</style>