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
 * The OauthAccessTokenDataRelationshipsUserData model module.
 * @module model/OauthAccessTokenDataRelationshipsUserData
 * @version 1.0.0
 */
class OauthAccessTokenDataRelationshipsUserData {
    /**
     * Constructs a new <code>OauthAccessTokenDataRelationshipsUserData</code>.
     * @alias module:model/OauthAccessTokenDataRelationshipsUserData
     */
    constructor() { 
        
        OauthAccessTokenDataRelationshipsUserData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OauthAccessTokenDataRelationshipsUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OauthAccessTokenDataRelationshipsUserData} obj Optional instance to populate.
     * @return {module:model/OauthAccessTokenDataRelationshipsUserData} The populated <code>OauthAccessTokenDataRelationshipsUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OauthAccessTokenDataRelationshipsUserData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OauthAccessTokenDataRelationshipsUserData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OauthAccessTokenDataRelationshipsUserData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * @member {String} type
 */
OauthAccessTokenDataRelationshipsUserData.prototype['type'] = undefined;

/**
 * @member {String} id
 */
OauthAccessTokenDataRelationshipsUserData.prototype['id'] = undefined;






export default OauthAccessTokenDataRelationshipsUserData;

