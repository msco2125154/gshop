<template>
  <div id="app">
    <tabbar v-show="$route.meta.showtabbar"></tabbar>
     <router-view></router-view>   
  </div>
</template>
<script>
import tabbar from './components/FooterGuide/tabbar'
export default {
  data () {
    return {
      datalist: [],
      isShow: true,
      idda:[]
    }
  },
  components: {
    tabbar
  }
}
</script>
<style lang="stylus">


*{
    margin:0px;
    padding:0px;
}

body{
background :#f5f5f5;
}
ul{
  list-style-type: none;
}
h3 i{
  color:#eee;
}

</style>
