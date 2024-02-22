# ProxiedMailApi.ApiApi

All URIs are relative to *http://proxiedmail.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ApiTokenGet**](ApiApi.md#apiV1ApiTokenGet) | **GET** /api/v1/api-token | Get api token



## apiV1ApiTokenGet

> ApiV1ApiTokenGet200Response apiV1ApiTokenGet()

Get api token



### Example

```javascript
import ProxiedMailApi from 'proxied_mail_api';
let defaultClient = ProxiedMailApi.ApiClient.instance;
// Configure Bearer access token for authorization: api_auth
let api_auth = defaultClient.authentications['api_auth'];
api_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxiedMailApi.ApiApi();
apiInstance.apiV1ApiTokenGet((error, data, response) => {
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

[**ApiV1ApiTokenGet200Response**](ApiV1ApiTokenGet200Response.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

