/**
 * Module dependencies
 */

var sailsDeploy = require('../');





describe('normal usage: sanity check', function (){

  before(function setup(done){
    done();
  });



  it('should not do anything insane', function (done){
    sailsDeploy({
      deploy: {
        module: 'sails-hook-bogus'
      }
    }, function (err){
      // we'll likely get an error since that module is totally bogus

      // this test just makes sure nothing crashes
      done();
    });
  });



  after(function teardown(done){
    done();
  });

});
