/**
 * Module dependences
*/

var path = require('path');
var _ = require('lodash');




module.exports = function sailsDeploy(inputs, cb) {

  // `inputs.config` is provided with the raw config that Sails core gathered by running `rc`.
  //
  try {

    // If `deploy` or `deploy.module` are missing or invalid, bail out w/ an error
    // (we just throw an error w/ a helpful message, since the  catch() below will take care of it)
    if (!_.isObject(inputs.config) || !_.isObject(inputs.config.deploy) || !_.isString(inputs.config.deploy.module) ) {
      throw new Error('Incomplete `config` provided to sails-deploy! Expected `config.deploy.module` to exist and be a string.');
    }

    // TODO: determine configured deployment strategy
    var configuredStrategy = inputs.config.deploy.module;

    // TODO: normalize and deterine the appropriate require path for the strategy
    // (if it's expressed as a relative path, resolve it from the appPath; ie inputs.config.appPath)
    var appPath = inputs.config.appPath||process.cwd();
    var pathToStrategy = 'TODO';

    // TODO: require the strategy code
    var strategy = require(pathToStrategy);

    // Run the strategy
    strategy({
      config: inputs.config
    }, function (err) {
      if (err) {
        console.error('Deployment failed! Details:\n',err);
        return cb(err);
      }

      console.error('Deployment successful.');
      return cb();
    });

  }
  catch (e) {
    console.error('Deployment failed! Details:\n',e.stack);
    return cb(e);
  }
};
