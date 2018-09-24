import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form.js';

window.Vue = Vue;
window.axios = axios;
window.Form = Form;

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });

const app = new Vue({
  el: '#app',

  data: {
    skills: [],
    form: new Form({
      name: '',
      description: '',
    }),
  },

  methods: {
    onSubmit() {
      this.form.post('/projects')
        .then(response => console.log(response))
        .catch(errors => console.log(errors));
    },
  },

  mounted() {
    axios.get('/skills').then(response => this.skills = response.data);
  },
});
