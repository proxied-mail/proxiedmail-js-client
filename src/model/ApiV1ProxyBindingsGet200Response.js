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

import ApiClient from '../ApiClient';
import ApiV1ProxyBindingsGet200ResponseMeta from './ApiV1ProxyBindingsGet200ResponseMeta';
import ProxyBindingList from './ProxyBindingList';

/**
 * The ApiV1ProxyBindingsGet200Response model module.
 * @module model/ApiV1ProxyBindingsGet200Response
 * @version 1.0.0
 */
class ApiV1ProxyBindingsGet200Response {
    /**
     * Constructs a new <code>ApiV1ProxyBindingsGet200Response</code>.
     * @alias module:model/ApiV1ProxyBindingsGet200Response
     */
    constructor() { 
        
        ApiV1ProxyBindingsGet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiV1ProxyBindingsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiV1ProxyBindingsGet200Response} obj Optional instance to populate.
     * @return {module:model/ApiV1ProxyBindingsGet200Response} The populated <code>ApiV1ProxyBindingsGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiV1ProxyBindingsGet200Response();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiV1ProxyBindingsGet200ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProxyBindingList]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiV1ProxyBindingsGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiV1ProxyBindingsGet200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          ApiV1ProxyBindingsGet200ResponseMeta.validateJSON(data['meta']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['data'])) {
            throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/ApiV1ProxyBindingsGet200ResponseMeta} meta
 */
ApiV1ProxyBindingsGet200Response.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/ProxyBindingList>} data
 */
ApiV1ProxyBindingsGet200Response.prototype['data'] = undefined;






export default ApiV1ProxyBindingsGet200Response;

