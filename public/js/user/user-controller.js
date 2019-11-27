
app.controller('ctrlUser', function($scope,$http) 
{
  

        $scope.save=function(user) {
            var data = user;
                method = 'POST';
                url = '/user';
            
            $http({method: method, url: url,data : data,headers: {'Content-Type': 'application/json'}}).
            then(function(response)
            {
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response) 
            {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
            alert('error');
        });
    }   
    $scope.login=function(user) {
        var data = user;
            method = 'POST';
            url = '/user/signin';
        
        $http({method: method, url: url,data : data,headers: {'Content-Type': 'application/json'}}).
        then(function(response)
        {
            $scope.status = response.status;
            $scope.data = response.data;
        }, function(response) 
        {
        $scope.data = response.data || 'Request failed';
        $scope.status = response.status;
        alert('error');
    });
} 
   
});