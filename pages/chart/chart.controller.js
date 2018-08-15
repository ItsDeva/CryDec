crydecApp.controller('chartController', function ($scope, $http, $q) {
    $scope.chartMessage = 'Time will change Everything';
    $scope.chartTitle = 'Enter your text to be Encypted';

    $scope.setFiles = function (element) {
        $scope.$apply(function ($scope) {
            $scope.files = element.files[0]
        })
    };
    //All Show and Hide Variables
    $scope.showUpload = true;
    $scope.showTable = true;
    $scope.showPredict = false;


    $scope.uploadFile = function () {
        let q = $q.defer();
        var fd = new FormData();
        fd.append('file', $scope.files);
        fd.append('name', $scope.name);
        $http.post('http://localhost:5000/uploader', fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).success(function (response) {
            $scope.showTable = true;
            $scope.showUpload = false;
            q.resolve(response)
        })
        return q.promise;
    }
    $scope.goNext = function () {
        if ($scope.files != undefined) {
            $scope.uploadFile().then(function (res) {
                console.log('this is my response', res);
                $scope.algorithmScores = res;
            })
        } else {
            alert('Please Select a File!')
        }
    }

    $scope.showPredictForm = function (algoName) {
        $scope.showPredict = true
        $scope.showTable = false
        $scope.currentAlgo = algoName
    }

    $scope.predictResult = function () {
        var keys = Object.keys($scope.algorithmScores.fields)
        var indexCount = keys.length;
        var reqData = [$scope.currentAlgo]
        console.log('indexCount' + indexCount + keys)
        var fd = new FormData();
        alert('curalgo',$scope.currentAlgo,'something',reqData)
        fd.append('algoName',reqData[0]);
        for (i = 0; i < indexCount; i++) {
            var fieldName = i.toString() + i.toString()
            var fieldValue = document.getElementById("predictForm").elements.namedItem(fieldName).value;
            console.log('Current Value: ', keys[i], fieldValue);
            reqData.push(keys[i],fieldValue)
            fd.append(keys[i],fieldValue);
        }
        console.log('reqData - ' + fd)

        alert('req data',reqData)
        $http.post('http://localhost:5000/victory', fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).success(function (response) {
            console.log('response from flask ', response)
        })
    }

})