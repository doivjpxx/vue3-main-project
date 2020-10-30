export default {
  async addCoach(context, payload) {
    const userId = context.rootGetters.getUserId;
    const coachData = {
      id: userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      rate: payload.rate,
      areas: payload.areas,
    }

    const response = await fetch(`https://vue3-main.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });

    // const responseData = await response.json();

    if (!response.ok) {
      return;
    }

    context.commit('addCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch('https://vue3-main.firebaseio.com/coaches.json');
    const responseData = await response.json();

    if (!response.ok) {
      return;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: responseData[key].id,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        rate: responseData[key].rate,
        areas: responseData[key].areas,
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  }
}