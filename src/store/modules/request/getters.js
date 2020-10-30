export default {
  getRequests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.getUserId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  }
};
