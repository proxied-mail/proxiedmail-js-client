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
import AuthRequestData from './AuthRequestData';

/**
 * The AuthRequest model module.
 * @module model/AuthRequest
 * @version 1.0.0
 */
class AuthRequest {
    /**
     * Constructs a new <code>AuthRequest</code>.
     * @alias module:model/AuthRequest
     */
    constructor() { 
        
        AuthRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthRequest} obj Optional instance to populate.
     * @return {module:model/AuthRequest} The populated <code>AuthRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = AuthRequestData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          AuthRequestData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/AuthRequestData} data
 */
AuthRequest.prototype['data'] = undefined;






export default AuthRequest;

