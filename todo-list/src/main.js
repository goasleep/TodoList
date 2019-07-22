import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    allItem: []
  },
  mutations: {
    addNewItem(state,item){
      state.allItem
    }
  }

}
  
)

new Vue({
  render: h => h(App),
}).$mount('#app')
