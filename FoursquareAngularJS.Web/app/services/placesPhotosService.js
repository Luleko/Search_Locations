'use strict';
//Get your client ID and secrent by visiting https://developer.foursquare.com
//Thise are demo client Id & secret.

var requestParms = {
    clientId: "ONVSMUYIDJK1E1R2MMTMWVWJWGMNWY3H3R2HXN4CAEMIWH2E",
    clientSecret: "J5RAL4XLR005GGCLLDWWV0OLXXKEEY2AO4GC2QGZVYF4A32R",
    version: "20211007"
}

app.factory('placesPhotosService', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:venueId/:action';

    return $resource(requestUri,
        {
            action: 'photos',
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            limit: '9',
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

});