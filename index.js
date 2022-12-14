const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios')

try {
  // `who-to-greet` input defined in action metadata file
  const API_URL = core.getInput('devenv-api-url');
  const CLIENTSECRETKEYID = core.getInput('devenv-client-secret-key-id');
  const CLIENTSECRETKEY = core.getInput('devenv-client-secret-key');
  const time = (new Date()).toTimeString();
  const payload = JSON.stringify(github.context.payload)
  console.log(`The event payload: ${payload}`);
  axios.post(API_URL, payload)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
} catch (error) {
  core.setFailed(error.message);
}