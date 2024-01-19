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
import OauthAccessTokenDataRelationshipsUser from './OauthAccessTokenDataRelationshipsUser';

/**
 * The OauthAccessTokenDataRelationships model module.
 * @module model/OauthAccessTokenDataRelationships
 * @version 1.0.0
 */
class OauthAccessTokenDataRelationships {
    /**
     * Constructs a new <code>OauthAccessTokenDataRelationships</code>.
     * @alias module:model/OauthAccessTokenDataRelationships
     */
    constructor() { 
        
        OauthAccessTokenDataRelationships.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OauthAccessTokenDataRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OauthAccessTokenDataRelationships} obj Optional instance to populate.
     * @return {module:model/OauthAccessTokenDataRelationships} The populated <code>OauthAccessTokenDataRelationships</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OauthAccessTokenDataRelationships();

            if (data.hasOwnProperty('user')) {
                obj['user'] = OauthAccessTokenDataRelationshipsUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OauthAccessTokenDataRelationships</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OauthAccessTokenDataRelationships</code>.
     */
    static validateJSON(data) {
        // validate the optional field `user`
        if (data['user']) { // data not null
          OauthAccessTokenDataRelationshipsUser.validateJSON(data['user']);
        }

        return true;
    }


}



/**
 * @member {module:model/OauthAccessTokenDataRelationshipsUser} user
 */
OauthAccessTokenDataRelationships.prototype['user'] = undefined;






export default OauthAccessTokenDataRelationships;

