import Vue from 'vue';
import App from './app';
import white from '../../lib/white.common';

Vue.use(white);

/* eslint-disable-next-line */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
});
