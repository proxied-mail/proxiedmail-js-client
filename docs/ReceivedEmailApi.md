# ProxiedMailApi.ReceivedEmailApi

All URIs are relative to *http://proxiedmail.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ReceivedEmailsLinksProxyBindingIdGet**](ReceivedEmailApi.md#apiV1ReceivedEmailsLinksProxyBindingIdGet) | **GET** /api/v1/received-emails-links/{proxyBindingId} | Get received emails list by proxy email (last 55)
[**apiV1ReceivedEmailsReceivedEmailIdGet**](ReceivedEmailApi.md#apiV1ReceivedEmailsReceivedEmailIdGet) | **GET** /api/v1/received-emails/{receivedEmailId} | Get content of received email by id



## apiV1ReceivedEmailsLinksProxyBindingIdGet

> ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response apiV1ReceivedEmailsLinksProxyBindingIdGet(proxyBindingId)

Get received emails list by proxy email (last 55)



### Example

```javascript
import ProxiedMailApi from 'proxied_mail_api';
let defaultClient = ProxiedMailApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new ProxiedMailApi.ReceivedEmailApi();
let proxyBindingId = "proxyBindingId_example"; // String | proxyBindingId of proxy email that needs to be fetched
apiInstance.apiV1ReceivedEmailsLinksProxyBindingIdGet(proxyBindingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proxyBindingId** | **String**| proxyBindingId of proxy email that needs to be fetched | 

### Return type

[**ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response**](ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1ReceivedEmailsReceivedEmailIdGet

> ApiV1ReceivedEmailsReceivedEmailIdGet200Response apiV1ReceivedEmailsReceivedEmailIdGet(receivedEmailId)

Get content of received email by id



### Example

```javascript
import ProxiedMailApi from 'proxied_mail_api';
let defaultClient = ProxiedMailApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new ProxiedMailApi.ReceivedEmailApi();
let receivedEmailId = "receivedEmailId_example"; // String | receivedEmailId of received email that needs to be fetched
apiInstance.apiV1ReceivedEmailsReceivedEmailIdGet(receivedEmailId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivedEmailId** | **String**| receivedEmailId of received email that needs to be fetched | 

### Return type

[**ApiV1ReceivedEmailsReceivedEmailIdGet200Response**](ApiV1ReceivedEmailsReceivedEmailIdGet200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

