import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    age:0
  },


  getters:{
   getterAge(state){
     return state.age += 20
   }
  },

  mutations: {
    addCount(state, obj){
        console.log(state)
        console.log(obj)
      return state.count += obj.num;
    },
    subCount(state, obj){
      return state.count -= obj.num;
    },


  },
  actions: {
      add2(context){
          console.log(context)
          setTimeout(()=>{
            context.commit('addCount',{
              num: 3
            })
          },4000)
      },

      sub2(context){
        setTimeout(()=>{
          context.commit('subCount',{
            num:4
          })
        },4000)
      }
      
  }
})
