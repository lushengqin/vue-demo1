console.log(window.Vue)
// import Vue from 'vue'
// import App from './App.vue'
const Vue = window.Vue
Vue.config.productionTip = false

import Demo from './components/deom.vue'

new Vue({
    components:{
        Demo
    },
    data() {
    return {
      flag:true,
        n:0
    }
  },
  template: `
    <div>
      <Demo message="您好我是卢勤"></Demo>
        <Demo :message="n"> </Demo>
    </div>
  `,
  methods: {
    btnClick() {
      console.log('我执行了')
      this.flag = !this.flag
    }
  }
}).$mount('#app')





// import  Demo from  './components/demo001'

// new Vue({
//   el: '#app',
//   components: {
//     Demo
//   },
//   data() {
//     return {
//       flag:true
//     }
//   },
//   template: `
//     <div>
//       <button @click='btnClick'>toggle</button>
//       <hr>
//       <Demo v-if='flag === true'/>
//     </div>
//   `,
//   methods: {
//     btnClick() {
//       console.log('我执行了')
//       this.flag = !this.flag
//     }
//   }
// })


// new Vue({
//   data() {
//     return {
//       n:0,
//       array:[1,2,3,4,5,6,7,8]
//     }
//   },
//   template: `
//     <div class='red'>
//       {{n}}
//       <button @click='add'>按钮+1</button>
//       {{array.filter(i=>i%2===0)}}
//     </div>
//   `,
//   methods: {
//     add() {
//       this.n+=1
//     }
//   }
// }).$mount('#app')








// // new Vue({
// //   render: h => h(App),
// // }).$mount('#app')

// import demo from './components/demo001.vue'
//  const vm = new Vue({  //new实例化
//    render:h=> h(demo),
//  }).$mount('#app')

// const $div = new jQuery('#xxx')  //jQuery实例化  jQuery可以省略前面的new 
//  const $div = jQuery('#xxx') // const $div = $('#xxx) //所以我们也可以写成这两种方式 


// 第一版
// new Vue({
//   el: '#app',
//   data: {
//     n:0
//   },
//   methods: {
//     add() {
//       this.n+=1
//     }
//   }
// })

// 第二版
// new Vue({
//   el: '#app',
//   render (h) {
//     // return h('div', this.n)  
//     // 如果想要得到+1效果代码如下
//     return h("div", [this.n, h("button", {
//       on:{click:this.add}
//     },"+1")])
//   },
//   data: {
//     n:0
//   },
//   methods: {
//     add() {
//       this.n +=1
//     }
//   }
// })

// 第三版

// new Vue({
//   el: '#app',
//   render(h) {
//     return h(demo)
//   }
// })


// new Vue({
//   render: h => h(demo)
// }).$mount('#app')