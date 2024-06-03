<script>
import axios from 'axios';
export default {
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            error_message: '',
            project: null
        };
    },

    mounted() {
        const url = this.base_api_url + this.base_projects_url + `/${this.$route.params.id}`;

        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.response;
                    this.loading = false
                } else {
                    // Gestisci il caso in cui la chiamata API non abbia successo
                }
            })
            .catch(err => {
                this.error_message = err.message;
            });

    }
}

</script>

<template>
    <template v-if="project">
        <div class="container py-5">
            <div class="row d-flex align-items-center">
                <div class="col-6">
                    <template v-if="project.image.startsWith('uploads')">
                        <img :src="base_api_url + /storage/ + project.image" alt="Title" />
                    </template>
                    <template v-else>
                        <img  :src="project.image" alt="Title" />
                    </template>
                </div>
                <div class="col-6">
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                </div>
            </div>
        </div>
    </template>
</template>
