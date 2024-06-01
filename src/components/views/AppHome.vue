<script>
import axios from 'axios';

export default {
  name: 'AppHome',


  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_projects_url: '/api/projects',
      projects: []
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
  mounted() {
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
  <main>
    <div class="jumbo-me">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="left-jumbo">
            <h1>Welcome to my Website</h1>
            <h4>My name is Massimo</h4>
            <p>I am a junior full-stack web developer and on this site I present to you my work and my skills</p>
          </div>
          <div class="right-jumbo">
            <div class="square"></div>
            <img class="img-me" src="/public/img/Jumbo.jpeg" alt="">
          </div>
        </div>
      </div>
    </div>

    <section class="technology">
      <h2>Technology</h2>
      <div class="container">
        <div class="row justify-content-center mx-auto">
          <div class="col-3">
            <div class="back-img d-flex justify-content-center align-items-center">
              <img width="100" src="/public/img/css.png" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="back-img d-flex justify-content-center align-items-center">
              <img width="100" src="/public/img/html.png" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="back-img d-flex justify-content-center align-items-center">
              <img width="100" src="/public/img/laravel.png" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="back-img d-flex justify-content-center align-items-center">
              <img width="100" src="/public/img/node.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-3">
            <div class="back-img d-flex justify-content-center align-items-center">
              <img width="100" src="/public/img/php.jpg" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="back-img d-flex justify-content-center align-items-center">
              <img width="100" src="/public/img/vuejs.png" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="back-img d-flex justify-content-center align-items-center">
              <img width="100" src="/public/img/mysql.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5">
      <div class="row">
        <div class="col-4 gap-3 pb-3" v-for="project in projects.data">
          <div class="card p-4 bg-dark border ">
            <template v-if="project.image.startsWith('uploads')">
              <img class="card-img-top" :src="base_api_url + /storage/ + project.image" alt="Title" />
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
  </main>


</template>

<style></style>
