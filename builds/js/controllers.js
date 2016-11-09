
phoneBook.controller('phoneBookCtrl',function($scope){
    $scope.phoneUsersList = [
        {
            firstName: "Alfimov",
            avatar: "",
            group: "friends"
        }
    ];
    $scope.addUsers = function () {
        var elments = {
            firstName: $scope.name,
            avatar: $scope.avatar,
            group: $scope.groupe
        };
        $scope.phoneUsersList.push(elments);
        console.log($scope.phoneUsersList);
    }
    $scope.removeUsers = function (i) {
        console.log(i);
        $scope.phoneUsersList.splice(1,1);
    }
    
});