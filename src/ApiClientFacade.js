const ProxiedMailApi = require("../dist");

class ApiClientFacade {
    apiToken;
    proxyBindingApi;

    constructor(apiToken) {
        this.apiToken = apiToken;
        this.proxyBindingApi = new ProxiedMailApi.ProxyBindingApi();

        //defining API key globally
        this.proxyBindingApi.apiClient.authentications['api_key'].apiKey = apiToken;
    }

    createProxyEmail(
        callback,
        proxyEmailAddress = null,
        realEmail = null,
        callbackUrl = null,
        isBrowsable = true
    ) {
        if (typeof realEmail === 'string') {
            realEmail = [realEmail]
        }

        const payload = ProxiedMailApi.ProxyBindingCreate.constructFromObject(
            {
                "data": {
                    "type": "proxy_bindings",
                    "attributes": {
                        "real_addresses": realEmail === null ? [] : realEmail,
                        "proxy_address": proxyEmailAddress,
                        "callback_url": callbackUrl,
                        "is_browsable": isBrowsable,
                    }
                }
            }
        );

        return this.proxyBindingApi.addProxyBinding(
            {'proxyBindingCreate': payload},
            decorate(decorateProxyEmail, callback)
        );
    }

    getReceivedEmails(id, callback)
    {
        const self = this
        var receivedEmailApi = new ProxiedMailApi.ReceivedEmailApi();
        return receivedEmailApi.apiV1ReceivedEmailsLinksProxyBindingIdGet(
            id,
            function (error, d, response) {
                if (error) {
                    throw error
                }

                if (response.body.data.length === 0) {
                    return callback(response.body);
                }

                let newResponse = {
                    "data": []
                };

                for (let i in response.body.data) {
                    let receivedEmail = response.body.data[i];
                    receivedEmail.getId = function () {
                        return this.id;
                    }
                    receivedEmail.getDetails = function (callback) {
                        return self.getReceivedEmailDetails(
                            this.id,
                            callback
                        );
                    }
                    newResponse.data.push(receivedEmail);
                }

                return callback(newResponse)
            }
        )
    }

    getReceivedEmailDetails(id, callback)
    {
        var receivedEmailApi = new ProxiedMailApi.ReceivedEmailApi();
        return receivedEmailApi.apiV1ReceivedEmailsReceivedEmailIdGet(
            id,
            function (error, t, response) {

                response = response.body;

                if (error) {
                    throw error
                }

                response.getId = function () {
                    return this.data.id;
                }
                response.getSubject = function () {
                    return this.data.attributes.payload.subject;
                }
                response.getPayloadBodyPlain = function () {
                    return this.data.attributes.payload['body-plain'];
                }
                response.getPayloadBodyHtml = function () {
                    return this.data.attributes.payload['body-html'];
                }
                response.getPayload = function () {
                    return this.data.attributes.payload;
                }
                response.getAttachments = function () {
                    return this.data.attributes.attachments;
                }
                response.getSender = function () {
                    return this.data.attributes.sender_email;
                }
                response.getRecipient = function () {
                    return this.data.attributes.recipient_email;
                }


                return callback(response);
            }
        );
    }
}

function decorate(decorator, callback) {
    return function (error, resp) {
        if (error) {
            throw error
        }

        return callback(decorator(resp))
    }
}

function decorateProxyEmail(obj) {
    obj.getProxyEmail = function () {
        return this.data.attributes.proxy_address;
    }
    obj.getFirstRealAddress = function () {
        return Object.keys(this.data.attributes.real_addresses)[0];
    }
    obj.getId = function () {
        return this.data.id;
    }

    return obj;
}

export default ApiClientFacade;