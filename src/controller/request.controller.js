

angular.module('myApp').controller('requestCtrl',['$scope','$http',

    function($scope,$http) {
        var refresh = function() {
            console.log("REFRESH");
            $http.get('/requests').success(function (response) {
                console.log("I got data I requested");
                $scope.requests=response;
                $scope.request="";
            });
        };
        refresh();

        $http.get('/drugs').success(function (response) {
            console.log("I got data I requested");
            $scope.drugs=response;

        });

        $scope.showDetails = function(id){
            console.log("Edited");
            console.log(id);
            $http.get('/drugs/' + id).success(function(response){
                $scope.drug = response;
            });
        };

        $scope.sendRequest = function() {
            console.log("Added");
            console.log($scope.request);
            $http.post('/requests/', $scope.request).then(function(response){
                console.log(response);
                window.alert("Request Sent");
            });
        };


        $http.get('/requests').success(function (response) {
            console.log("I got data I requested");
            $scope.requests = response;
        });

        $scope.showRequest = function(id){
            console.log("Edited");
            console.log(id);
            $http.get('/requests/' + id).success(function(response){
                $scope.request = response;
            });
        };

        $scope.removeRequest = function(id){
            console.log("Removed");
            console.log(id);
            $http.delete('/requests/' + id).then(function(response){
                refresh();
            });
        };

        $scope.updateRequest = function(){
            console.log("Updated");
            console.log($scope.request._id);
            $http.put('/requests/' + $scope.request._id,$scope.request).then(function(response){
                refresh();
            });
        };




    }

]);