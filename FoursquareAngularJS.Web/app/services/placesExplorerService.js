'use strict';
//Get your client ID and secrent by visiting https://developer.foursquare.com

var requestParms = {
    clientId: "ONVSMUYIDJK1E1R2MMTMWVWJWGMNWY3H3R2HXN4CAEMIWH2E",
    clientSecret: "J5RAL4XLR005GGCLLDWWV0OLXXKEEY2AO4GC2QGZVYF4A32R",
    version: "20211007"
}

app.factory('placesExplorerService', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource(requestUri,
        {
            action: 'explore',
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            venuePhotos: '1',
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

});