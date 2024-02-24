let ProxiedMailApi = require('proxiedmail-api');

let apiInstance = new ProxiedMailApi.UserApi();


let authReq = {
    'authRequest': ProxiedMailApi.AuthRequest.constructFromObject(
        {
            "data": {
                "type": "auth-request",
                "attributes": {
                    "username": "example.com", //please pass your credentials here after sign up
                    "password": "1"
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


                        const proxyBinding = response;

                        var receivedEmailApi = new ProxiedMailApi.ReceivedEmailApi();
                        receivedEmailApi.apiV1ReceivedEmailsLinksProxyBindingIdGet(
                            response.body.data.id,
                            function (error, pb, response) {

                                console.log("Checking inbox of: " + proxyBinding.body.data.attributes.proxy_address)


                                console.log('zzzzhhhh', response.body)
                                for (let i in response.body.data) {

                                    receivedEmailApi.apiV1ReceivedEmailsReceivedEmailIdGet(
                                        response.body.data[i]['id'],
                                        function (error, pb, response) {
                                            console.log(
                                                "RECEIVED EMAIL \n" +
                                                response.body
                                            )
                                        }
                                    )
                                }

                            }
                        )

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
                    "callback_url": callbackUrl,
                    "is_browsable": true,
                }
            }
        }
    );
}