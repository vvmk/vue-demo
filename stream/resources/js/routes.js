import VueRouter from 'vue-router';

// Laravel-mix allows omission of .vue syntax from components below. i.e. component: require('./views/Home.vue');
let routes = [
    { path: '/', component: require('./views/Home') },
];

export default new VueRouter({
    routes
});
