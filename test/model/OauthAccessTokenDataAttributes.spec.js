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
    instance = new ProxiedMailApi.OauthAccessTokenDataAttributes();
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

  describe('OauthAccessTokenDataAttributes', function() {
    it('should create an instance of OauthAccessTokenDataAttributes', function() {
      // uncomment below and update the code to test OauthAccessTokenDataAttributes
      //var instance = new ProxiedMailApi.OauthAccessTokenDataAttributes();
      //expect(instance).to.be.a(ProxiedMailApi.OauthAccessTokenDataAttributes);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new ProxiedMailApi.OauthAccessTokenDataAttributes();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new ProxiedMailApi.OauthAccessTokenDataAttributes();
      //expect(instance).to.be();
    });

    it('should have the property _2faGranted (base name: "2fa_granted")', function() {
      // uncomment below and update the code to test the property _2faGranted
      //var instance = new ProxiedMailApi.OauthAccessTokenDataAttributes();
      //expect(instance).to.be();
    });

    it('should have the property isNewAcc (base name: "isNewAcc")', function() {
      // uncomment below and update the code to test the property isNewAcc
      //var instance = new ProxiedMailApi.OauthAccessTokenDataAttributes();
      //expect(instance).to.be();
    });

  });

}));
