# ProxiedMailApi.UserApi

All URIs are relative to *http://proxiedmail.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userAuth**](UserApi.md#userAuth) | **POST** /api/v1/auth | Auhtorization



## userAuth

> OauthAccessToken userAuth(opts)

Auhtorization



### Example

```javascript
import ProxiedMailApi from 'proxied_mail_api';

let apiInstance = new ProxiedMailApi.UserApi();
let opts = {
  'authRequest': new ProxiedMailApi.AuthRequest() // AuthRequest | 
};
apiInstance.userAuth(opts, (error, data, response) => {
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
 **authRequest** | [**AuthRequest**](AuthRequest.md)|  | [optional] 

### Return type

[**OauthAccessToken**](OauthAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

