const core = require('@actions/core');
const github = require('@actions/github');

try {
  var baseVersion = core.getInput('version', {required: false}) || 'v1.0.0-beta.1';
  core.debug(`Input version: ${baseVersion}`);

  const test = process.env.GITHUB_SHA || "GITHUB_SHA::undefined";
  core.debug(test);

  baseVersion = baseVersion.replace(/^(v)/,"");
  core.debug(`Working version: ${baseVersion}`);

  core.debug('Split versions on "."');
  const words = baseVersion.split('.');
  words.forEach(element => {
    core.debug(element);
  });
  
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
}
catch (error) {
  core.setFailed(error.message);
}