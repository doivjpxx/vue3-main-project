import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const requestModule = {
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  mutations,
  actions,
  getters,
};

export default requestModule;
