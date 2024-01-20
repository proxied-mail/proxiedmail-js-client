# ProxiedMail JS client

Welcome to [ProxiedMail](https://proxiedmail.com) API client.
You're welcome to [visit the docs](https://docs.proxiedmail.com).

[Quickly jump into get started guide](#getting-started)

### Features

🔴 Authorization

🔴 Callback receiver (creating callback urls, read callback payload)

🔴 Proxy-emails CRUD (create, read, update, todo: delete)



## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Use to following command to install:

```shell
npm install proxiedmail-api
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

If the library is hosted at a git repository, https://github.com/proxied-mail/proxiedmail-js-client
then install it via:

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

Please follow the [installation](#installation) instruction. 
Then you will be able to execute email receiving into your js application example:

```javascript
let ProxiedMailApi = require('proxiedmail-api');

let apiInstance = new ProxiedMailApi.UserApi();


let authReq = {
    'authRequest': ProxiedMailApi.AuthRequest.constructFromObject(
        {
            "data": {
                "type": "auth-request",
                "attributes": {
                    "username": "example@example.com", //please pass your credentials here after sign up
                    "password": "example"
                }
            }
        }
    )
};

//logging in
apiInstance.userAuth(authReq, (error, data, response) => {
    if (error) {
        console.error("error:" + error);
    } else {
        let token = data.data.attributes.token;
        var apiApiClient = new ProxiedMailApi.ApiApi();
        apiApiClient.apiClient.authentications['api_auth'].accessToken = token; //settings bearer token

        //getting api token
        // your can skip this step and get one on the UI https://proxiedmail.com/en/settings
        apiApiClient.apiV1ApiTokenGet((error, data, response) => {
            if (error) {
                console.error("error:" + error);
            }

            //settings up api token
            let apiToken = data.token;
            var callbackApi = new ProxiedMailApi.CallbackApi();
            callbackApi.apiClient.authentications['api_key'].apiKey = apiToken;

            // creating built-in callback-receiver
            callbackApi.addCallback((error, cb, response) => {
                const proxyBindingPayload = {'proxyBindingCreate': createProxyBindingPayload(cb.call_url)}

                var proxyBindingApi = new ProxiedMailApi.ProxyBindingApi();
                //creating proxy-email and assigning callback url
                proxyBindingApi.addProxyBinding(proxyBindingPayload, (error, pb, response) => {

                    //continuously checking callback status to get the email
                    //just send the email to pb.data.attributes.proxy_address to check it out
                    const interval = setInterval(function () {
                        callbackApi.apiV1CallbackGetHashGet(cb.id, function (error, cbInfo) {
                            console.log('check callback. email: ' + pb.data.attributes.proxy_address);
                            console.log(cbInfo)

                            //printing email info about callback
                            if (cbInfo.is_received) {

                                console.log('received')
                                console.log(cbInfo)
                                console.log('Subject: ' + cbInfo.payload.payload.Subject)
                                console.log('Message: ' + cbInfo.payload.payload['body-plain'])
                                console.log('From: ' + cbInfo.payload.payload['from'])

                                clearInterval(interval);
                            }

                        });
                    }, 2000);
                });
            } )

        });
    }
});


//callback construction function
function createProxyBindingPayload(callbackUrl) {
    return ProxiedMailApi.ProxyBindingCreate.constructFromObject(
        {
            "data":{
                "type":"proxy_bindings",
                "attributes":{
                    "real_addresses":[], //on empty it will generate internal real address
                    //that kind of real addresses is not forwarding anything to any email
                    //however if you need forwarding just use something like "abc@example.com"
                    //please note that real address should be confirmed
                    "proxy_address": null,
                    "callback_url": callbackUrl
                }
            }
        }
    );
}
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

