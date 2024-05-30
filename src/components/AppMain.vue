<script>
import axios from 'axios';

export default {
  name: 'AppMain',
  

  data(){
    return{
      base_api_url:'http://127.0.0.1:8000',
      base_projects_url:'/api/projects',
      projects:[]
    }
  },
  methods:
    {
      callApi(url) {
        axios
        .get(url)
        .then(response => {
          //console.log(response.data.projects);
          this.projects = response.data.projects;
        }
        ).catch(err => {
          this.error_message = err.message;
        })
      }
    },
  mounted(){
    /* axios
    .get('http://127.0.0.1:8000/api/projects')
    .then(response=>{
      console.log(response);
    }) */

      let url = this.base_api_url + this.base_projects_url
      this.callApi(url)
  }
}


</script>

<template>
  <div class="bg-secondary">
    <div class="container py-5">
      <div class="row">
        <div class="col-4 gap-3 pb-3" v-for="project in projects.data" >
          <div class="card p-4 bg-dark border ">
            <template v-if="project.image.startsWith('uploads')">
              <img class="card-img-top" :src="base_api_url  + /storage/ + project.image" alt="Title" />
            </template>
            <template v-else>
              <img class="card-img-top" :src="project.image" alt="Title" />
            </template>
            <div class="card-body text-center">
              <h4 class="card-title text-danger">{{ project.title }}</h4>
              <p class="card-text text-light">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style></style>
