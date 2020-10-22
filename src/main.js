import { createApp } from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

const app = createApp(App);

app.config.devtools = true;

app.use(router);
app.use(store);

app.mount('#app');
