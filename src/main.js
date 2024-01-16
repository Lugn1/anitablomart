import './assets/main.css'
import './assets/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Order from "@/views/Order.vue";
import Blog from "@/views/Blog.vue";
import Gallery from "./views/Gallery.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/blog', name: 'Blog', component: Blog},
        {path: '/contact', name: 'Contact', component: Contact},
        {path: '/gallery', name: 'Gallery', component: Gallery},
        {path: '/order', name: 'Order', component: Order}
    ]
})

createApp(App).use(router).mount('#app')
