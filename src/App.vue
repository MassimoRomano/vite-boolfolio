<script>
import AppHeader from './components/partials/AppHeader.vue'
import AppFooter from './components/partials/AppFooter.vue'
import AppHome from './components/views/AppHome.vue';


export default {
  name:'App',
  components:{
    AppHome,
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