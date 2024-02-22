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


import ApiClient from './ApiClient';
import AddProxyBinding200Response from './model/AddProxyBinding200Response';
import AddProxyBinding200ResponseMeta from './model/AddProxyBinding200ResponseMeta';
import AddProxyBinding401ResponseInner from './model/AddProxyBinding401ResponseInner';
import AddProxyBinding401ResponseInnerData from './model/AddProxyBinding401ResponseInnerData';
import AddProxyBinding401ResponseInnerDataAttributes from './model/AddProxyBinding401ResponseInnerDataAttributes';
import ApiV1ApiTokenGet200Response from './model/ApiV1ApiTokenGet200Response';
import ApiV1ProxyBindingsGet200Response from './model/ApiV1ProxyBindingsGet200Response';
import ApiV1ProxyBindingsGet200ResponseMeta from './model/ApiV1ProxyBindingsGet200ResponseMeta';
import ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response from './model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response';
import ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes from './model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes';
import ApiV1ReceivedEmailsReceivedEmailIdGet200Response from './model/ApiV1ReceivedEmailsReceivedEmailIdGet200Response';
import ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributes from './model/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributes';
import ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesAttachmentsInner from './model/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesAttachmentsInner';
import ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesPayload from './model/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesPayload';
import AuthRequest from './model/AuthRequest';
import AuthRequestData from './model/AuthRequestData';
import AuthRequestDataAttributes from './model/AuthRequestDataAttributes';
import CreatedCallback from './model/CreatedCallback';
import GetCallback from './model/GetCallback';
import OauthAccessToken from './model/OauthAccessToken';
import OauthAccessTokenData from './model/OauthAccessTokenData';
import OauthAccessTokenDataAttributes from './model/OauthAccessTokenDataAttributes';
import OauthAccessTokenDataRelationships from './model/OauthAccessTokenDataRelationships';
import OauthAccessTokenDataRelationshipsUser from './model/OauthAccessTokenDataRelationshipsUser';
import OauthAccessTokenDataRelationshipsUserData from './model/OauthAccessTokenDataRelationshipsUserData';
import PatchProxyBindingRequestInner from './model/PatchProxyBindingRequestInner';
import ProxyBindingCreate from './model/ProxyBindingCreate';
import ProxyBindingCreateData from './model/ProxyBindingCreateData';
import ProxyBindingCreateDataAttributes from './model/ProxyBindingCreateDataAttributes';
import ProxyBindingList from './model/ProxyBindingList';
import ProxyBindingListAttributes from './model/ProxyBindingListAttributes';
import ProxyBindingListAttributesRealAddressesValue from './model/ProxyBindingListAttributesRealAddressesValue';
import ApiApi from './api/ApiApi';
import CallbackApi from './api/CallbackApi';
import ProxyBindingApi from './api/ProxyBindingApi';
import ReceivedEmailApi from './api/ReceivedEmailApi';
import UserApi from './api/UserApi';


/**
* ProxiedMail API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ProxiedMailApi = require('index'); // See note below*.
* var xxxSvc = new ProxiedMailApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ProxiedMailApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ProxiedMailApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ProxiedMailApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AddProxyBinding200Response model constructor.
     * @property {module:model/AddProxyBinding200Response}
     */
    AddProxyBinding200Response,

    /**
     * The AddProxyBinding200ResponseMeta model constructor.
     * @property {module:model/AddProxyBinding200ResponseMeta}
     */
    AddProxyBinding200ResponseMeta,

    /**
     * The AddProxyBinding401ResponseInner model constructor.
     * @property {module:model/AddProxyBinding401ResponseInner}
     */
    AddProxyBinding401ResponseInner,

    /**
     * The AddProxyBinding401ResponseInnerData model constructor.
     * @property {module:model/AddProxyBinding401ResponseInnerData}
     */
    AddProxyBinding401ResponseInnerData,

    /**
     * The AddProxyBinding401ResponseInnerDataAttributes model constructor.
     * @property {module:model/AddProxyBinding401ResponseInnerDataAttributes}
     */
    AddProxyBinding401ResponseInnerDataAttributes,

    /**
     * The ApiV1ApiTokenGet200Response model constructor.
     * @property {module:model/ApiV1ApiTokenGet200Response}
     */
    ApiV1ApiTokenGet200Response,

    /**
     * The ApiV1ProxyBindingsGet200Response model constructor.
     * @property {module:model/ApiV1ProxyBindingsGet200Response}
     */
    ApiV1ProxyBindingsGet200Response,

    /**
     * The ApiV1ProxyBindingsGet200ResponseMeta model constructor.
     * @property {module:model/ApiV1ProxyBindingsGet200ResponseMeta}
     */
    ApiV1ProxyBindingsGet200ResponseMeta,

    /**
     * The ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response model constructor.
     * @property {module:model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response}
     */
    ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response,

    /**
     * The ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes model constructor.
     * @property {module:model/ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes}
     */
    ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes,

    /**
     * The ApiV1ReceivedEmailsReceivedEmailIdGet200Response model constructor.
     * @property {module:model/ApiV1ReceivedEmailsReceivedEmailIdGet200Response}
     */
    ApiV1ReceivedEmailsReceivedEmailIdGet200Response,

    /**
     * The ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributes model constructor.
     * @property {module:model/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributes}
     */
    ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributes,

    /**
     * The ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesAttachmentsInner model constructor.
     * @property {module:model/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesAttachmentsInner}
     */
    ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesAttachmentsInner,

    /**
     * The ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesPayload model constructor.
     * @property {module:model/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesPayload}
     */
    ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesPayload,

    /**
     * The AuthRequest model constructor.
     * @property {module:model/AuthRequest}
     */
    AuthRequest,

    /**
     * The AuthRequestData model constructor.
     * @property {module:model/AuthRequestData}
     */
    AuthRequestData,

    /**
     * The AuthRequestDataAttributes model constructor.
     * @property {module:model/AuthRequestDataAttributes}
     */
    AuthRequestDataAttributes,

    /**
     * The CreatedCallback model constructor.
     * @property {module:model/CreatedCallback}
     */
    CreatedCallback,

    /**
     * The GetCallback model constructor.
     * @property {module:model/GetCallback}
     */
    GetCallback,

    /**
     * The OauthAccessToken model constructor.
     * @property {module:model/OauthAccessToken}
     */
    OauthAccessToken,

    /**
     * The OauthAccessTokenData model constructor.
     * @property {module:model/OauthAccessTokenData}
     */
    OauthAccessTokenData,

    /**
     * The OauthAccessTokenDataAttributes model constructor.
     * @property {module:model/OauthAccessTokenDataAttributes}
     */
    OauthAccessTokenDataAttributes,

    /**
     * The OauthAccessTokenDataRelationships model constructor.
     * @property {module:model/OauthAccessTokenDataRelationships}
     */
    OauthAccessTokenDataRelationships,

    /**
     * The OauthAccessTokenDataRelationshipsUser model constructor.
     * @property {module:model/OauthAccessTokenDataRelationshipsUser}
     */
    OauthAccessTokenDataRelationshipsUser,

    /**
     * The OauthAccessTokenDataRelationshipsUserData model constructor.
     * @property {module:model/OauthAccessTokenDataRelationshipsUserData}
     */
    OauthAccessTokenDataRelationshipsUserData,

    /**
     * The PatchProxyBindingRequestInner model constructor.
     * @property {module:model/PatchProxyBindingRequestInner}
     */
    PatchProxyBindingRequestInner,

    /**
     * The ProxyBindingCreate model constructor.
     * @property {module:model/ProxyBindingCreate}
     */
    ProxyBindingCreate,

    /**
     * The ProxyBindingCreateData model constructor.
     * @property {module:model/ProxyBindingCreateData}
     */
    ProxyBindingCreateData,

    /**
     * The ProxyBindingCreateDataAttributes model constructor.
     * @property {module:model/ProxyBindingCreateDataAttributes}
     */
    ProxyBindingCreateDataAttributes,

    /**
     * The ProxyBindingList model constructor.
     * @property {module:model/ProxyBindingList}
     */
    ProxyBindingList,

    /**
     * The ProxyBindingListAttributes model constructor.
     * @property {module:model/ProxyBindingListAttributes}
     */
    ProxyBindingListAttributes,

    /**
     * The ProxyBindingListAttributesRealAddressesValue model constructor.
     * @property {module:model/ProxyBindingListAttributesRealAddressesValue}
     */
    ProxyBindingListAttributesRealAddressesValue,

    /**
    * The ApiApi service constructor.
    * @property {module:api/ApiApi}
    */
    ApiApi,

    /**
    * The CallbackApi service constructor.
    * @property {module:api/CallbackApi}
    */
    CallbackApi,

    /**
    * The ProxyBindingApi service constructor.
    * @property {module:api/ProxyBindingApi}
    */
    ProxyBindingApi,

    /**
    * The ReceivedEmailApi service constructor.
    * @property {module:api/ReceivedEmailApi}
    */
    ReceivedEmailApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
