import { createStore } from 'vuex';
import coachModule from './modules/coach';
import requestModule from './modules/request';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule,
  },
  state() {
    return {
      userId: 'c1',
    }
  },
  getters: {
    getUserId(state) {
      return state.userId;
    }
  }
});

export default store;
