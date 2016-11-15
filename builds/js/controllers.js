
phoneBook.controller('phoneBookCtrl',function($scope){
    $scope.flagEdit = false;
    $scope.phoneUsersList = [
        {
            name: "Alfimov",
            avatar: "",
            group: "friends"
        }
    ];

    

    $scope.addUsers = function () {
        
        
        if ($scope.flagEdit) {
            var link_array = $scope.phoneUsersList[$scope.flagEdit];
            for (prop in link_array) {
                link_array[prop] = $scope[prop];
            }
            $scope.flagEdit = false;
        } else {
            var elments = new InputType();
            for (prop in elments) {
                elments[prop] = $scope[prop] !== '' && $scope[prop] !== false && $scope[prop] !== undefined ? $scope[prop] : elments[prop];
            }

            $scope.phoneUsersList.push(elments);
        }
        
        $scope.name = '';
        $scope.avatar = '';
        $scope.group = '';
    }

    $scope.removeUsers = function (i) {
        var x = searchByHashkey ( $scope.phoneUsersList, i);
        $scope.phoneUsersList.splice(x,1);
    }

    $scope.editUsers = function (n) {
        var x = searchByHashkey ( $scope.phoneUsersList, n);
        var index = $scope.phoneUsersList[x];
        $scope.name = index.name;
        $scope.avatar = index.avatar;
        $scope.group = index.group;
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

    function InputType () {
        this.name = "";
        this.avatar = "default";
        this.group = "";
    }

});