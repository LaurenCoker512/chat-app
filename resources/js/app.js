const { default: axios } = require('axios');

require('./bootstrap');

require('alpinejs');

window.Vue = require('vue').default;

Vue.component('chat-room', require('./Chat.vue').default);

const app = new Vue({
  el: '#app',
});
