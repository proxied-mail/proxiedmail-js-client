# ProxiedMailApi.ProxyBindingApi

All URIs are relative to *http://proxiedmail.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProxyBinding**](ProxyBindingApi.md#addProxyBinding) | **POST** /api/v1/proxy-bindings | Auhtorization
[**apiV1ProxyBindingsGet**](ProxyBindingApi.md#apiV1ProxyBindingsGet) | **GET** /api/v1/proxy-bindings | Auhtorization
[**patchProxyBinding**](ProxyBindingApi.md#patchProxyBinding) | **PATCH** /api/v1/proxy-bindings/{id} | Auhtorization



## addProxyBinding

> AddProxyBinding200Response addProxyBinding(opts)

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

let apiInstance = new ProxiedMailApi.ProxyBindingApi();
let opts = {
  'proxyBindingCreate': [new ProxiedMailApi.ProxyBindingCreate()] // [ProxyBindingCreate] | 
};
apiInstance.addProxyBinding(opts, (error, data, response) => {
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
 **proxyBindingCreate** | [**[ProxyBindingCreate]**](ProxyBindingCreate.md)|  | [optional] 

### Return type

[**AddProxyBinding200Response**](AddProxyBinding200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1ProxyBindingsGet

> ApiV1ProxyBindingsGet200Response apiV1ProxyBindingsGet()

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

let apiInstance = new ProxiedMailApi.ProxyBindingApi();
apiInstance.apiV1ProxyBindingsGet((error, data, response) => {
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

[**ApiV1ProxyBindingsGet200Response**](ApiV1ProxyBindingsGet200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchProxyBinding

> AddProxyBinding200Response patchProxyBinding(id, opts)

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

let apiInstance = new ProxiedMailApi.ProxyBindingApi();
let id = "id_example"; // String | ID of proxy-email that needs to be fetched
let opts = {
  'patchProxyBindingRequestInner': [new ProxiedMailApi.PatchProxyBindingRequestInner()] // [PatchProxyBindingRequestInner] | 
};
apiInstance.patchProxyBinding(id, opts, (error, data, response) => {
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
 **id** | **String**| ID of proxy-email that needs to be fetched | 
 **patchProxyBindingRequestInner** | [**[PatchProxyBindingRequestInner]**](PatchProxyBindingRequestInner.md)|  | [optional] 

### Return type

[**AddProxyBinding200Response**](AddProxyBinding200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

