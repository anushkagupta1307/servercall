app.factory("geofactory",function($http,$q){
    var object={};
    object.callServer=function(type,hostname){
        var result;
        var pr=$q.defer();
        $http.get(url+type+"/"+hostname).then(function(data){
            pr.resolve(data);
        },function(error){
            pr.reject(error);
        });
        
     return pr.promise;   
    }
    return object;
})