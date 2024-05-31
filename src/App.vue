<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue';


export default {
  name:'App',
  components:{
    AppMain,
    AppHeader,
    AppFooter,
  },
}
  

</script>

<template>
 
 <body>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </body>

</template>

<style>
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './style.css';
</style>