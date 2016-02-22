app.controller("mapController", function($scope) {
    angular.extend($scope, {
        home: {
            lat: 0,
            lng: 0,
            zoom: 2
        },
        data: {markers: {}}
    });

    $scope.addMarkers = function() {
        $scope.data.markers = {};
        angular.extend($scope.data, {
            markers: {
                m1: {
                    lat: 30,
                    lng: -10
                },
                m2: {
                    lat: -10,
                    lng: 20
                },
                m3: {
                    lat: 51,
                    lng: -1
                }
            }
        });
    };

    $scope.addMarkers();
});