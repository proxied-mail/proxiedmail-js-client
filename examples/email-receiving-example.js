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
                    "real_addresses":[
                        "dawwaawdawd@proxiedmail-int.int"
                    ],
                    "proxy_address": null,
                    "callback_url": callbackUrl
                }
            }
        }
    );
}
