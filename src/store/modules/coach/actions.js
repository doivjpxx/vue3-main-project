export default {
  addCoach(context, payload) {
    const coachData = {
      id: context.rootGetters.getUserId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      rate: payload.rate,
      areas: payload.areas,
    }
    context.commit('addCoach', coachData);
  }
}