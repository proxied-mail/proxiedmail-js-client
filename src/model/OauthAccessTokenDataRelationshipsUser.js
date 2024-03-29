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
import OauthAccessTokenDataRelationshipsUserData from './OauthAccessTokenDataRelationshipsUserData';

/**
 * The OauthAccessTokenDataRelationshipsUser model module.
 * @module model/OauthAccessTokenDataRelationshipsUser
 * @version 1.0.0
 */
class OauthAccessTokenDataRelationshipsUser {
    /**
     * Constructs a new <code>OauthAccessTokenDataRelationshipsUser</code>.
     * @alias module:model/OauthAccessTokenDataRelationshipsUser
     */
    constructor() { 
        
        OauthAccessTokenDataRelationshipsUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OauthAccessTokenDataRelationshipsUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OauthAccessTokenDataRelationshipsUser} obj Optional instance to populate.
     * @return {module:model/OauthAccessTokenDataRelationshipsUser} The populated <code>OauthAccessTokenDataRelationshipsUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OauthAccessTokenDataRelationshipsUser();

            if (data.hasOwnProperty('data')) {
                obj['data'] = OauthAccessTokenDataRelationshipsUserData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OauthAccessTokenDataRelationshipsUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OauthAccessTokenDataRelationshipsUser</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          OauthAccessTokenDataRelationshipsUserData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/OauthAccessTokenDataRelationshipsUserData} data
 */
OauthAccessTokenDataRelationshipsUser.prototype['data'] = undefined;






export default OauthAccessTokenDataRelationshipsUser;

