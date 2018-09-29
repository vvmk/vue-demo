// require('./bootstrap');
import './bootstrap';
import router from './routes';

new Vue({
    el: '#app',
    router: router,
    mounted() {
        alert('src ok');
    }
});
