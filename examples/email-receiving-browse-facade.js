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
