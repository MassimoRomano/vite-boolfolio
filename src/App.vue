<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  name:'App',
  components:{
    AppMain,
    AppHeader,
    AppFooter,
  },

  data(){
    return{
      base_api_url:'http://127.0.0.1:8000',
      base_projects_url:'/api/projects'
      
    }
  },
  mounted(){
    axios
    .get('http://127.0.0.1:8000/api/projects')
    .then(response=>{
      console.log(response);
    })
  }
}

</script>

<template>

<AppHeader />
<AppMain />
<AppFooter />

</template>