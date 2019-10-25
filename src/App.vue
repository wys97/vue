<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-link" to="/">首页</router-link>
      <router-link class="nav-link" to="/clean-up">赚钱</router-link>
      <router-link class="nav-link" to="/my">我的</router-link>
    </div>
    <router-view />
  </div>
</template>

<script sec='@components/rem.js'></script>


<script>
export default {
  methods: {
 
  },
  created() {
  
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  position: absolute;
  width: 100%;
  min-height: 90%;
  font-size: 1rem;
  background: #222224;
  color: #f2d3ab;
  padding-bottom: 3.125rem;
}
#nav {
  left: 0;
  right: 0;
  height: 3.125rem;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2f2f30;
  display: flex;
  justify-content: space-around;
  z-index: 100;
}

.nav-link {
  line-height: 3.125rem;
  color: #d6bc98;
  width: 100%;
  text-align: center;
  text-decoration: none;
}

#nav .router-link-exact-active {
  background: #222224;
}
</style>


