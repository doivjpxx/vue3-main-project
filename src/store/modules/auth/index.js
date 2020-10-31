import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const authModule = {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations,
  actions,
  getters
};

export default authModule;
