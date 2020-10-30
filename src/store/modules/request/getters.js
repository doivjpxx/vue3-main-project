export default {
  getRequests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.getUserId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
