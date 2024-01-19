/**
 * ProxiedMail API
 * ProxiedMail API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProxiedMailApi);
  }
}(this, function(expect, ProxiedMailApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProxiedMailApi.GetCallback();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetCallback', function() {
    it('should create an instance of GetCallback', function() {
      // uncomment below and update the code to test GetCallback
      //var instance = new ProxiedMailApi.GetCallback();
      //expect(instance).to.be.a(ProxiedMailApi.GetCallback);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ProxiedMailApi.GetCallback();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instance = new ProxiedMailApi.GetCallback();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new ProxiedMailApi.GetCallback();
      //expect(instance).to.be();
    });

    it('should have the property isReceived (base name: "is_received")', function() {
      // uncomment below and update the code to test the property isReceived
      //var instance = new ProxiedMailApi.GetCallback();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new ProxiedMailApi.GetCallback();
      //expect(instance).to.be();
    });

  });

}));