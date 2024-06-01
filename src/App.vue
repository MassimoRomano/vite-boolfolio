<script>
import AppHeader from './components/partials/AppHeader.vue'
import AppFooter from './components/partials/AppFooter.vue'



export default {
  name:'App',
  components:{
    AppHeader,
    AppFooter,
  },
}
  

</script>

<template>
 
 <body>
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </body>

</template>

<style>
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './style.css';
</style>