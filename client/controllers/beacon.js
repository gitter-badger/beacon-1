app.controller('beaconController', function ($scope, $http) {
   angular.extend($scope, { 
        home: {
            lat: 51.505,
            lng: -0.09,
            autoDiscover: true,
            zoom: 8
        },
        events: {}
    });

    $scope.markers = [];

    $scope.$on("leafletDirectiveMap.click", function(event, args){
        var leafEvent = args.leafletEvent;
        $scope.markers = [];
        $scope.markers.push({
            lat: leafEvent.latlng.lat,
            lng: leafEvent.latlng.lng,
            focus: true,
        });
        var marker = $scope.markers[0];
        console.log(marker);
        var sendBeacon = function(marker){
            var payload = marker;
            console.log(payload);
            $http.post('api/beacons',payload)
                .success(function(data) {
                    if (data){
                        console.log(data);
                    }
                });
        }
    });
    
    // $scope.sendBeacon = function(marker){
    //     var payload = marker;
    //     $http.post('/api/beacons', payload)
    // }

});