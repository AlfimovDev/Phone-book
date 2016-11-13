
phoneBook.controller('phoneBookCtrl',function($scope){
    $scope.flagEdit = false;
    $scope.phoneUsersList = [
        {
            firstName: "Alfimov",
            avatar: "",
            group: "friends"
        }
    ];

    

    $scope.addUsers = function () {
        
        if ($scope.flagEdit) {
            var link_array = $scope.phoneUsersList[$scope.flagEdit];
            link_array.firstName = $scope.name;
            link_array.avatar = $scope.avatar;
            link_array.group = $scope.groupe;
            $scope.flagEdit = false;
        } else {
            var elments = {
                firstName: $scope.name,
                avatar: $scope.avatar,
                group: $scope.groupe
            };
            $scope.phoneUsersList.push(elments);
        }
        
        $scope.name = '';
        $scope.avatar = '';
        $scope.groupe = '';
    }

    $scope.removeUsers = function (i) {
        var x = searchByHashkey ( $scope.phoneUsersList, i);
        $scope.phoneUsersList.splice(x,1);
    }

    $scope.editUsers = function (n) {
        var x = searchByHashkey ( $scope.phoneUsersList, n);
        var index = $scope.phoneUsersList[x];
        $scope.name = index.firstName;
        $scope.avatar = index.avatar;
        $scope.groupe = index.group;
        $scope.flagEdit = searchByHashkey ( $scope.phoneUsersList, n);
    }
    
    function searchByHashkey (obj, key) {
        for (var i in obj) {
            if ( obj[i].$$hashKey == key ) {
                return i;
            }
        }
        return console.log("Not Found");
    }
});