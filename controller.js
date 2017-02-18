app.controller("geoctrl",function($scope,geofactory){
    $scope.searchhost=function(){
        var promise=geofactory.callServer($scope.format,$scope.hostname);
        promise.then(function(data){
            $scope.result=data.data;
        },function(error){
            $scope.error=error;
        });
    }


});