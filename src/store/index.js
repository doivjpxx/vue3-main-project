import { createStore } from 'vuex';
import coachModule from './modules/coach';

const store = createStore({
  modules: {
    coaches: coachModule,
  }
});

export default store;
