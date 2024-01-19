# ProxiedMail JS client

Welcome to [ProxiedMail](https://proxiedmail.com) API client.
You're welcome to [visit the docs](https://docs.proxiedmail.com).

### Features

🔴 Authorization

🔴 Callback receiver (creating callback urls, read callback payload)

🔴 Proxy-emails CRUD (create, read, update, todo: delete)



## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install proxied_mail_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your proxied_mail_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProxiedMailApi = require('proxied_mail_api');

var defaultClient = ProxiedMailApi.ApiClient.instance;
// Configure Bearer access token for authorization: api_auth
var api_auth = defaultClient.authentications['api_auth'];
api_auth.accessToken = "YOUR ACCESS TOKEN"

var api = new ProxiedMailApi.ApiApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiV1ApiTokenGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://proxiedmail.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProxiedMailApi.ApiApi* | [**apiV1ApiTokenGet**](docs/ApiApi.md#apiV1ApiTokenGet) | **GET** /api/v1/api-token | Auhtorization
*ProxiedMailApi.CallbackApi* | [**addCallback**](docs/CallbackApi.md#addCallback) | **POST** /api/v1/callback | Auhtorization
*ProxiedMailApi.CallbackApi* | [**apiV1CallbackGetHashGet**](docs/CallbackApi.md#apiV1CallbackGetHashGet) | **GET** /api/v1/callback/get/{hash} | Auhtorization
*ProxiedMailApi.ProxyBindingApi* | [**addProxyBinding**](docs/ProxyBindingApi.md#addProxyBinding) | **POST** /api/v1/proxy-bindings | Auhtorization
*ProxiedMailApi.ProxyBindingApi* | [**apiV1ProxyBindingsGet**](docs/ProxyBindingApi.md#apiV1ProxyBindingsGet) | **GET** /api/v1/proxy-bindings | Auhtorization
*ProxiedMailApi.ProxyBindingApi* | [**patchProxyBinding**](docs/ProxyBindingApi.md#patchProxyBinding) | **PATCH** /api/v1/proxy-bindings/{id} | Auhtorization
*ProxiedMailApi.UserApi* | [**userAuth**](docs/UserApi.md#userAuth) | **POST** /api/v1/auth | Auhtorization


## Documentation for Models

 - [ProxiedMailApi.AddProxyBinding200Response](docs/AddProxyBinding200Response.md)
 - [ProxiedMailApi.AddProxyBinding200ResponseMeta](docs/AddProxyBinding200ResponseMeta.md)
 - [ProxiedMailApi.AddProxyBinding401ResponseInner](docs/AddProxyBinding401ResponseInner.md)
 - [ProxiedMailApi.AddProxyBinding401ResponseInnerData](docs/AddProxyBinding401ResponseInnerData.md)
 - [ProxiedMailApi.AddProxyBinding401ResponseInnerDataAttributes](docs/AddProxyBinding401ResponseInnerDataAttributes.md)
 - [ProxiedMailApi.ApiV1ApiTokenGet200Response](docs/ApiV1ApiTokenGet200Response.md)
 - [ProxiedMailApi.ApiV1ProxyBindingsGet200Response](docs/ApiV1ProxyBindingsGet200Response.md)
 - [ProxiedMailApi.ApiV1ProxyBindingsGet200ResponseMeta](docs/ApiV1ProxyBindingsGet200ResponseMeta.md)
 - [ProxiedMailApi.AuthRequest](docs/AuthRequest.md)
 - [ProxiedMailApi.AuthRequestData](docs/AuthRequestData.md)
 - [ProxiedMailApi.AuthRequestDataAttributes](docs/AuthRequestDataAttributes.md)
 - [ProxiedMailApi.CreatedCallback](docs/CreatedCallback.md)
 - [ProxiedMailApi.GetCallback](docs/GetCallback.md)
 - [ProxiedMailApi.OauthAccessToken](docs/OauthAccessToken.md)
 - [ProxiedMailApi.OauthAccessTokenData](docs/OauthAccessTokenData.md)
 - [ProxiedMailApi.OauthAccessTokenDataAttributes](docs/OauthAccessTokenDataAttributes.md)
 - [ProxiedMailApi.OauthAccessTokenDataRelationships](docs/OauthAccessTokenDataRelationships.md)
 - [ProxiedMailApi.OauthAccessTokenDataRelationshipsUser](docs/OauthAccessTokenDataRelationshipsUser.md)
 - [ProxiedMailApi.OauthAccessTokenDataRelationshipsUserData](docs/OauthAccessTokenDataRelationshipsUserData.md)
 - [ProxiedMailApi.PatchProxyBindingRequestInner](docs/PatchProxyBindingRequestInner.md)
 - [ProxiedMailApi.ProxyBindingCreate](docs/ProxyBindingCreate.md)
 - [ProxiedMailApi.ProxyBindingCreateData](docs/ProxyBindingCreateData.md)
 - [ProxiedMailApi.ProxyBindingCreateDataAttributes](docs/ProxyBindingCreateDataAttributes.md)
 - [ProxiedMailApi.ProxyBindingList](docs/ProxyBindingList.md)
 - [ProxiedMailApi.ProxyBindingListAttributes](docs/ProxyBindingListAttributes.md)
 - [ProxiedMailApi.ProxyBindingListAttributesRealAddressesValue](docs/ProxyBindingListAttributesRealAddressesValue.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### api_auth

- **Type**: Bearer authentication

### api_key


- **Type**: API key
- **API key parameter name**: Token
- **Location**: HTTP header

