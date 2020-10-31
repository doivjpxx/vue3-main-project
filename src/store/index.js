import { createStore } from 'vuex';
import coachModule from './modules/coach';
import requestModule from './modules/request';
import authModule from './modules/auth';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule,
    auth: authModule,
  },
});

export default store;
