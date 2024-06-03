import { createWebHistory, createRouter } from "vue-router";
import AppHome from "./components/views/AppHome.vue";
import AppAbout from "./components/views/AppAbout.vue";
import AppProject from "./components/views/AppProject.vue";
import AppContacts from "./components/views/AppContacts.vue";
import AppShow from "./components/views/AppShow.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component:AppHome, name:'Home'},
        {path:'/about', component:AppAbout, name:'About'},
        {path:'/project', component:AppProject, name:'Project'},
        {path:'/contacts', component:AppContacts, name:'Contacts'},
        {path:'/projects/:id', component:AppShow, name:'Single'}
    ]
})

export default router