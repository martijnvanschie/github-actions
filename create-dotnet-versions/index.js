const core = require('@actions/core');
const github = require('@actions/github');

try {
  var baseVersion = core.getInput('version', {required: false}) || 'v1.0.0-beta.1';
  core.debug(`Input version: ${baseVersion}`);
  core.info(`Input version: ${baseVersion}`);
  core.warning(`Input version: ${baseVersion}`);
  core.error(`Input version: ${baseVersion}`);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  core.info(github.context.payload.ref);
  core.info(payload.ref);

  const test = process.env.GITHUB_SHA || "GITHUB_SHA::undefined";
  core.info(test);

  baseVersion = baseVersion.replace(/^(v)/,"");
  core.info(`Working version: ${baseVersion}`);

  core.info('Split versions on "."');
  const words = baseVersion.split('.');
  words.forEach(element => {
    core.info(element);
  });
  
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
}
catch (error) {
  core.setFailed(error.message);
}