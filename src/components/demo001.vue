<template>
    <div class="body">
        {{n}}
        <button @click="add">点击+1</button>
    </div>
</template>

<script>
export default {
    data(){
      return{
        n: 0,
        array:[1,2,3,4,5,6,7,8]
      }
  },
  created() {
    // debugger
    console.log('我是一开始就出现在页面中的')
  },
  mounted() {
    //  debugger
    console.log('我是直接出现的')
  },
  updated() {
    console.log('我是更新后出现的')
  },
  destroyed() {
    console.log('我从页面消失了')
  },
  methods:{
    add(){
      this.n +=1
    },
    filter() {
        // console.log(this.array)
     return  this.array.filter(i=>i%2===0)  //别忘记return
    }
    
  },
}
</script>

<style >
    .body{
        color: red;
    }
</style>