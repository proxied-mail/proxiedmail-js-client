# ProxiedMail JS client

### This simple library will allow you to receive and read emails through your NodeJS application

[NPM](https://www.npmjs.com/package/proxiedmail-api)

Welcome to [ProxiedMail](https://proxiedmail.com) API client.
You're welcome to [visit the docs](https://docs.proxiedmail.com).

[Quickly jump into get started guide](#getting-started)

You can also check out the article [emails receiving emails in NodeJS](https://dev.to/yatsenkolesh/how-to-receive-email-with-nodejs-g1a)

### Features

🔴 Authorization

🔴 Callback receiver (creating callback urls, read callback payload)

🔴 Proxy-emails CRUD (create, read, update, todo: delete)

🔴 Browsing received emails list


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


This is an example of receiving callback on received email.
If you want to try it out just install the library in some test dir.
Then don't forget to sign up in ProxiedMail to get your credentials or just put your existing auth credentials to the example.

Let's say you copied to example to the file (t.js), then you can simply run the command in your terminal:
```bash
node t.js
```

The output will be the following after execution:
```
...
check callback. email: 4d4b89991@proxiedmail.com
GetCallback {
  status: 'ok',
  payload: null,
  code: 'ok',
  is_received: false,
  method: null
}
...
```

Send the email to indicated email. Then you will get something like the following to your app (which indicates received email):
```
{
   "status":"ok",
   "payload":{
      "id":"C83643D7-D500-0000-00003CC8",
      "payload":{
         "Content-Type":"multipart/alternative; boundary=\"0000000000007777f3060f55ba65\"",
         "Date":"Sat, 20 Jan 2024 00:32:04 +0000",
         "Dkim-Signature":"....",
         "From":"Alex Yatsenko <yatsenkolesh@gmail.com>",
         "Message-Id":"<CAJj9C9eGg30K+Dzo+1paV_L5L8Mdkm=4gA6oda1ygGrRmn5ngg@mail.gmail.com>",
         "Mime-Version":"1.0",
         "Received":"....",
         "Subject":"hey hey",
         "To":"ee71fb6c2@proxiedmail.com",
         "body-html":"<div dir=\"ltr\">hello mate</div>\r\n",
         "body-plain":"hello mate\r\n",
         "domain":"proxiedmail.com",
         "from":"Alex Yatsenko <yatsenkolesh@gmail.com>",
         "recipient":"ee71fb6c2@proxiedmail.com",
         "sender":"yatsenkolesh@gmail.com",
         "signature":"ea0e415659f5bfbcd3d27a06806d6444005ed019656c9407e444872f0e64a0c2",
         "stripped-html":"<div dir=\"ltr\">hello mate</div>\n",
         "stripped-text":"hello mate",
         "subject":"hey hey",
         "timestamp":"1705710737",
         "token":"7b6c2bba30f805bd01596016b748aaa9af43d9e748c4c2a67c"
      },
      "attachments":[
         
      ],
      "recipient":{
         "address":"ee71fb6c2@proxiedmail.com"
      },
      "receivedAt":"Sat Jan 20 2024 00:32:17 GMT+0000",
      "user":{
         "id":"1B3AAA43-0000-0000-00009BC6",
         "username":"example-proxiedmail-user-email@com",
         "token":"Bearer ..."
      }
   },
   "code":"ok",
   "is_received":true,
   "method":"POST"
}
```


Please follow the [installation](#installation) instruction. But basically it's:
```shell
npm install proxiedmail-api
```


Then you will be able to execute email receiving into your js application.
You can use create proxy-emails and browsing emails list via facade.
Facade is a limited functionality. If you need more advanced features you can use advanced API.

```javascript
let token = 'YOUR API TOKEN';
const apiApiClient = new ProxiedMailApi.ApiClientFacade('ef23c45258d0d16239a583ed0a079cad');
apiApiClient.createProxyEmail((pb) => {
    console.log('Proxy address ' + pb.getProxyEmail())
    console.log('ID ' + pb.getId())

    setInterval(function () {
        console.log('Received emails')
        apiApiClient.getReceivedEmails(pb.getId(), (resp) => {
            console.log(resp)
            if (resp.data.length > 0) {
                resp.data[0].getDetails(function (details) {
                    console.log(details.getId());
                    console.log(details.getSubject());
                    console.log(details.getPayload());
                    console.log(details.getPayloadBodyHtml());

                })
            }
        });
    }, 3000);
})
```



Here is using ProxiedMail via advanced API:

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
*ProxiedMailApi.ApiApi* | [**apiV1ApiTokenGet**](docs/ApiApi.md#apiV1ApiTokenGet) | **GET** /api/v1/api-token | Get api token
*ProxiedMailApi.CallbackApi* | [**addCallback**](docs/CallbackApi.md#addCallback) | **POST** /api/v1/callback | Auhtorization
*ProxiedMailApi.CallbackApi* | [**apiV1CallbackGetHashGet**](docs/CallbackApi.md#apiV1CallbackGetHashGet) | **GET** /api/v1/callback/get/{hash} | Auhtorization
*ProxiedMailApi.ProxyBindingApi* | [**addProxyBinding**](docs/ProxyBindingApi.md#addProxyBinding) | **POST** /api/v1/proxy-bindings | Create proxy-email
*ProxiedMailApi.ProxyBindingApi* | [**apiV1ProxyBindingsGet**](docs/ProxyBindingApi.md#apiV1ProxyBindingsGet) | **GET** /api/v1/proxy-bindings | List of proxy emails
*ProxiedMailApi.ProxyBindingApi* | [**patchProxyBinding**](docs/ProxyBindingApi.md#patchProxyBinding) | **PATCH** /api/v1/proxy-bindings/{id} | Update proxy-email
*ProxiedMailApi.ReceivedEmailApi* | [**apiV1ReceivedEmailsLinksProxyBindingIdGet**](docs/ReceivedEmailApi.md#apiV1ReceivedEmailsLinksProxyBindingIdGet) | **GET** /api/v1/received-emails-links/{proxyBindingId} | Get received emails list by proxy email (last 55)
*ProxiedMailApi.ReceivedEmailApi* | [**apiV1ReceivedEmailsReceivedEmailIdGet**](docs/ReceivedEmailApi.md#apiV1ReceivedEmailsReceivedEmailIdGet) | **GET** /api/v1/received-emails/{receivedEmailId} | Get content of received email by id
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
- [ProxiedMailApi.ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response](docs/ApiV1ReceivedEmailsLinksProxyBindingIdGet200Response.md)
- [ProxiedMailApi.ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes](docs/ApiV1ReceivedEmailsLinksProxyBindingIdGet200ResponseAttributes.md)
- [ProxiedMailApi.ApiV1ReceivedEmailsReceivedEmailIdGet200Response](docs/ApiV1ReceivedEmailsReceivedEmailIdGet200Response.md)
- [ProxiedMailApi.ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributes](docs/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributes.md)
- [ProxiedMailApi.ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesAttachmentsInner](docs/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesAttachmentsInner.md)
- [ProxiedMailApi.ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesPayload](docs/ApiV1ReceivedEmailsReceivedEmailIdGet200ResponseAttributesPayload.md)
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

