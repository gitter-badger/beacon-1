app.controller("mapController", function($scope) {
    angular.extend($scope, {
        home: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8,
        },
        events: {}
    });

    $scope.markers = [];

    $scope.$on("leafletDirectiveMap.click", function(event, args){
        var leafEvent = args.leafletEvent;
        $scope.markers.push({
            lat: leafEvent.latlng.lat,
            lng: leafEvent.latlng.lng,
            message: "My Added Marker"
        });
    });
});