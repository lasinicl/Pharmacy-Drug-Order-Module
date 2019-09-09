/**
 * Created by PAVANI on 5/18/2017.
 */
//import orderApp from 'config.contriller';
//orderApp = require('/config.contriller');


console.log('working')

myApp.controller('orderController',function($scope, $http){
    console.log("working");
    $scope.removePlayer = function (ind) {
        var removePlaye = $scope.arr.indexOf(ind);
        $scope.arr.splice(removePlaye, 1);
    }

    $scope.addPlayer = function () {
        $scope.arr.push({
            name : $scope.newplayer.name,
            belt : $scope.newplayer.belt,
            rate : parseInt($scope.newplayer.rate),
            available : true,
            thumb : '../../img/gallery/photo1.jpg'
        });

        $scope.newplayer.name = "";
        $scope.newplayer.belt = "";
        $scope.newplayer.rate = "";
    };

    $http.get("test.json")
        .then(function(response) {
            console.log(response);
            $scope.arr = response.data;
            console.log(response.config.headers)
        });


});
console.log("Premadasa ");