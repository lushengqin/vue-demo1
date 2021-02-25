console.log(window.Vue)
// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// // new Vue({
// //   render: h => h(App),
// // }).$mount('#app')


// // const vm = new Vue({  //new实例化
// //   render:h=> h(App),
// // }).$mount('#app')

// // const $div = new jQuery('#xxx')  //jQuery实例化  jQuery可以省略前面的new 
// // const $div = jQuery('#xxx') // const $div = $('#xxx) //所以我们也可以写成这两种方式 


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
import demo001 from './components/demo001.vue'
new Vue({
  el: '#app',
  render(h) {
    return h(demo001)
  }
})