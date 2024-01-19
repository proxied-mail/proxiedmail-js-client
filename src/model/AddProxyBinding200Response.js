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
import AddProxyBinding200ResponseMeta from './AddProxyBinding200ResponseMeta';
import ProxyBindingList from './ProxyBindingList';

/**
 * The AddProxyBinding200Response model module.
 * @module model/AddProxyBinding200Response
 * @version 1.0.0
 */
class AddProxyBinding200Response {
    /**
     * Constructs a new <code>AddProxyBinding200Response</code>.
     * @alias module:model/AddProxyBinding200Response
     */
    constructor() { 
        
        AddProxyBinding200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddProxyBinding200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddProxyBinding200Response} obj Optional instance to populate.
     * @return {module:model/AddProxyBinding200Response} The populated <code>AddProxyBinding200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProxyBinding200Response();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AddProxyBinding200ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ProxyBindingList.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddProxyBinding200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddProxyBinding200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          AddProxyBinding200ResponseMeta.validateJSON(data['meta']);
        }

        return true;
    }


}



/**
 * @member {module:model/AddProxyBinding200ResponseMeta} meta
 */
AddProxyBinding200Response.prototype['meta'] = undefined;

/**
 * @member {module:model/ProxyBindingList} data
 */
AddProxyBinding200Response.prototype['data'] = undefined;






export default AddProxyBinding200Response;

