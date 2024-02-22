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


import ApiClient from "../ApiClient";
import AddProxyBinding200Response from '../model/AddProxyBinding200Response';
import AddProxyBinding401ResponseInner from '../model/AddProxyBinding401ResponseInner';
import ApiV1ProxyBindingsGet200Response from '../model/ApiV1ProxyBindingsGet200Response';
import PatchProxyBindingRequestInner from '../model/PatchProxyBindingRequestInner';
import ProxyBindingCreate from '../model/ProxyBindingCreate';

/**
* ProxyBinding service.
* @module api/ProxyBindingApi
* @version 1.0.0
*/
export default class ProxyBindingApi {

    /**
    * Constructs a new ProxyBindingApi. 
    * @alias module:api/ProxyBindingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addProxyBinding operation.
     * @callback module:api/ProxyBindingApi~addProxyBindingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddProxyBinding200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create proxy-email
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/ProxyBindingCreate>} [proxyBindingCreate] 
     * @param {module:api/ProxyBindingApi~addProxyBindingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddProxyBinding200Response}
     */
    addProxyBinding(opts, callback) {
      opts = opts || {};
      let postBody = opts['proxyBindingCreate'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddProxyBinding200Response;
      return this.apiClient.callApi(
        '/api/v1/proxy-bindings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1ProxyBindingsGet operation.
     * @callback module:api/ProxyBindingApi~apiV1ProxyBindingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV1ProxyBindingsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of proxy emails
     * 
     * @param {module:api/ProxyBindingApi~apiV1ProxyBindingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV1ProxyBindingsGet200Response}
     */
    apiV1ProxyBindingsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV1ProxyBindingsGet200Response;
      return this.apiClient.callApi(
        '/api/v1/proxy-bindings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchProxyBinding operation.
     * @callback module:api/ProxyBindingApi~patchProxyBindingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddProxyBinding200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update proxy-email
     * 
     * @param {String} id ID of proxy-email that needs to be fetched
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/PatchProxyBindingRequestInner>} [patchProxyBindingRequestInner] 
     * @param {module:api/ProxyBindingApi~patchProxyBindingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddProxyBinding200Response}
     */
    patchProxyBinding(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchProxyBindingRequestInner'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchProxyBinding");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddProxyBinding200Response;
      return this.apiClient.callApi(
        '/api/v1/proxy-bindings/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
