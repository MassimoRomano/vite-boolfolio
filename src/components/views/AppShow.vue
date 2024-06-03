<script>
import axios from 'axios';
export default {
    name: 'AppShow',
    props: {
        project: Object,
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            error_message: '',
        };
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    this.project = response.data.project;
                })
                .catch(err => {
                    this.error_message = err.message;
                });
        },
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url + '/' + this.$route.params.id;
        this.callApi(url);
    },
};
</script>

<template>
    <div class="container">
        <div class="d-flex gap-5">
            <div class="col-6">
                <template v-if="project.image.startsWith('uploads')">
                    <img class="card-img-top" :src="base_api_url + '/storage/' + project.image" alt="Title" />
                </template>
                <template v-else>
                    <img class="card-img-top" :src="project.image" alt="Title" />
                </template>
            </div>
            <div class="col-6">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>