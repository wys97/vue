<template>
  <div class="about">
    <h1>{{count}}</h1>
    <h1> 通过getter获取计算后的age：{{getCount}}</h1>
    <button @click="add">增加</button>
    <button @click="sub">减少</button>
    <button @click="add22">延时增加</button>
    <button @click="sub22">延时减少</button>
  </div>
</template>
<script>
  export default {
    methods:{
      add(){
       
        this.$store.commit('addCount',{
          num:2
        })
      },
      sub(){
        this.$store.commit('subCount',{
          num:1
        })
      },

      add22(){
        this.$store.dispatch('add2')
      },
      sub22(){
        this.$store.dispatch('sub2')
      }

    },
    computed:{
      count(){
        // return this.$store.state.count;
        return this.$store.state.count;
      },

      getCount(){
        return this.$store.getters.getterAge
      },

    }
  }

</script>