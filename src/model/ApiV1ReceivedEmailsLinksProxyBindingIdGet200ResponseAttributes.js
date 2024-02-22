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
 * The ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes model module.
 * @module model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes
 * @version 1.0.0
 */
class ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes {
    /**
     * Constructs a new <code>ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes</code>.
     * @alias module:model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes
     */
    constructor() { 
        
        ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes} obj Optional instance to populate.
     * @return {module:model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes} The populated <code>ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes();

            if (data.hasOwnProperty('recipient_email')) {
                obj['recipient_email'] = ApiClient.convertToType(data['recipient_email'], 'String');
            }
            if (data.hasOwnProperty('sender_email')) {
                obj['sender_email'] = ApiClient.convertToType(data['sender_email'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('attachmentsCounter')) {
                obj['attachmentsCounter'] = ApiClient.convertToType(data['attachmentsCounter'], 'Number');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('is_processed')) {
                obj['is_processed'] = ApiClient.convertToType(data['is_processed'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['recipient_email'] && !(typeof data['recipient_email'] === 'string' || data['recipient_email'] instanceof String)) {
            throw new Error("Expected the field `recipient_email` to be a primitive type in the JSON string but got " + data['recipient_email']);
        }
        // ensure the json data is a string
        if (data['sender_email'] && !(typeof data['sender_email'] === 'string' || data['sender_email'] instanceof String)) {
            throw new Error("Expected the field `sender_email` to be a primitive type in the JSON string but got " + data['sender_email']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {String} recipient_email
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['recipient_email'] = undefined;

/**
 * @member {String} sender_email
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['sender_email'] = undefined;

/**
 * @member {String} subject
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['subject'] = undefined;

/**
 * @member {Number} attachmentsCounter
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['attachmentsCounter'] = undefined;

/**
 * @member {String} link
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['link'] = undefined;

/**
 * @member {Boolean} is_processed
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['is_processed'] = undefined;

/**
 * @member {String} created_at
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.prototype['updated_at'] = undefined;






export default ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes;

