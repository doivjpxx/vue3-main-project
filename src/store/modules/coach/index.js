import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const coachModule = {
  namespaced: true,
  state() {
    return {
      coaches: []
    };
  },
  mutations,
  actions,
  getters
};

export default coachModule;
