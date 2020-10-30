export default {
  async addRequest(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(`https://vue3-main.firebaseio.com/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    newRequest.id = responseData.name;

    if (!response.ok) {
      return;
    }

    context.commit('addRequest', newRequest);
  },
  async fetchRequest(context) {
    const coachId = context.rootGetters.getUserId;
    const response = await fetch(`https://vue3-main.firebaseio.com/requests/${coachId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      return;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      }
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};
