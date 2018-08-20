/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// telling the vue that we are going to use vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    {path: '/dashboard', component: require('./components/Dashboard.vue')},
    {path: '/profile', component: require('./components/Profile.vue')}
];
//Registering the routes
const router = new VueRouter({
    routes // short for `routes: routes`
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router // Adding the router to the view instance
});
