const core = require('@actions/core');
const github = require('@actions/github');

try {
  var baseVersion = core.getInput('version', {required: false}) || 'v1.0.0-beta.1';
  core.info(`Input version: ${baseVersion}`);

  baseVersion = baseVersion.replace(/^(v)/,"");
  core.info(`Working version: ${baseVersion}`);

  core.info(process.env.GITHUB_SHA);
  const sha = process.env.GITHUB_SHA.substring(0,8);
  core.info(`SHA: ${sha}`);

  core.info('Split versions on "."');
  const words = baseVersion.split('.');
  words.forEach(element => {
    core.info(element);
  });
  
  const time = (new Date()).toTimeString();
  core.setOutput("version-assembly", time);
}
catch (error) {
  core.setFailed(error.message);
}