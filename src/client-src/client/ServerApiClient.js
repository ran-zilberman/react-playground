/**
 * Created by Ran_Zilberman on 17/05/2016.
 */

const createPostOptions = (payload) => {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };
};

class ServerApiClient {

  createModel(modelName) {
    let options = createPostOptions({modelName: modelName});

    return fetch(`saveFinancialModel`, options, (error, response) => {
      if (!error && response.statusCode === 200) {
        return;
      } else {
        throw new Error("Failed to save model: " + modelName);
      }
    });
  }
}

export default new ServerApiClient();
