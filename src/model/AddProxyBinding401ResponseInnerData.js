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
import AddProxyBinding401ResponseInnerDataAttributes from './AddProxyBinding401ResponseInnerDataAttributes';

/**
 * The AddProxyBinding401ResponseInnerData model module.
 * @module model/AddProxyBinding401ResponseInnerData
 * @version 1.0.0
 */
class AddProxyBinding401ResponseInnerData {
    /**
     * Constructs a new <code>AddProxyBinding401ResponseInnerData</code>.
     * @alias module:model/AddProxyBinding401ResponseInnerData
     */
    constructor() { 
        
        AddProxyBinding401ResponseInnerData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddProxyBinding401ResponseInnerData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddProxyBinding401ResponseInnerData} obj Optional instance to populate.
     * @return {module:model/AddProxyBinding401ResponseInnerData} The populated <code>AddProxyBinding401ResponseInnerData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProxyBinding401ResponseInnerData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = AddProxyBinding401ResponseInnerDataAttributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddProxyBinding401ResponseInnerData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddProxyBinding401ResponseInnerData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `attributes`
        if (data['attributes']) { // data not null
          AddProxyBinding401ResponseInnerDataAttributes.validateJSON(data['attributes']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
AddProxyBinding401ResponseInnerData.prototype['id'] = undefined;

/**
 * @member {String} type
 */
AddProxyBinding401ResponseInnerData.prototype['type'] = undefined;

/**
 * @member {module:model/AddProxyBinding401ResponseInnerDataAttributes} attributes
 */
AddProxyBinding401ResponseInnerData.prototype['attributes'] = undefined;






export default AddProxyBinding401ResponseInnerData;

