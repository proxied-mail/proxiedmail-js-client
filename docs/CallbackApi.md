# ProxiedMailApi.CallbackApi

All URIs are relative to *http://proxiedmail.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCallback**](CallbackApi.md#addCallback) | **POST** /api/v1/callback | Auhtorization
[**apiV1CallbackGetHashGet**](CallbackApi.md#apiV1CallbackGetHashGet) | **GET** /api/v1/callback/get/{hash} | Auhtorization



## addCallback

> CreatedCallback addCallback()

Auhtorization



### Example

```javascript
import ProxiedMailApi from 'proxied_mail_api';
let defaultClient = ProxiedMailApi.ApiClient.instance;
// Configure Bearer access token for authorization: api_auth
let api_auth = defaultClient.authentications['api_auth'];
api_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxiedMailApi.CallbackApi();
apiInstance.addCallback((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CreatedCallback**](CreatedCallback.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1CallbackGetHashGet

> GetCallback apiV1CallbackGetHashGet(hash)

Auhtorization



### Example

```javascript
import ProxiedMailApi from 'proxied_mail_api';
let defaultClient = ProxiedMailApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new ProxiedMailApi.CallbackApi();
let hash = "hash_example"; // String | Callback hash
apiInstance.apiV1CallbackGetHashGet(hash, (error, data, response) => {
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
 **hash** | **String**| Callback hash | 

### Return type

[**GetCallback**](GetCallback.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

