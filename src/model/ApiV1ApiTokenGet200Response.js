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

/**
 * The ApiV1ApiTokenGet200Response model module.
 * @module model/ApiV1ApiTokenGet200Response
 * @version 1.0.0
 */
class ApiV1ApiTokenGet200Response {
    /**
     * Constructs a new <code>ApiV1ApiTokenGet200Response</code>.
     * @alias module:model/ApiV1ApiTokenGet200Response
     */
    constructor() { 
        
        ApiV1ApiTokenGet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiV1ApiTokenGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiV1ApiTokenGet200Response} obj Optional instance to populate.
     * @return {module:model/ApiV1ApiTokenGet200Response} The populated <code>ApiV1ApiTokenGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiV1ApiTokenGet200Response();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiV1ApiTokenGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiV1ApiTokenGet200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}



/**
 * @member {String} token
 */
ApiV1ApiTokenGet200Response.prototype['token'] = undefined;






export default ApiV1ApiTokenGet200Response;

