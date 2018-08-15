crydecApp.controller('decController', function ($scope) {
    $scope.decMessage = 'Time will change Everything';
    $scope.decTitle = 'Enter your text to be Decrypted';
    $scope.iminbtn = 'btn iminred';
    $scope.timepass=""
    $scope.decryptToText = function () {
        if($scope.timepass === ""){
            $scope.timepass = Date.now();
        }
        var timepassStr = new Date($scope.timepass);
        timepassStr.setSeconds(0);
        var d = Date.parse(timepassStr.toString()).toString().substring(0, 10);
        // console.log("d after substring",d,"this d1","timepass",timepass);
        var password = $scope.password + d;
  
        var bf = new Blowfish(password);
        var rawEncText = convert2string()
        var decrypted = bf.decrypt(rawEncText);
        decrypted = bf.trimZeros(decrypted);
 
        $scope.decryptedText = decrypted;
        $scope.successFlag = "True";
        $scope.successMessage = "Decryption Successfull.";
    }
 
    $scope.changeiminbtnclr = function () {
        $scope.iminbtn = 'btn btn-success';
        $scope.timepass=Date.now();
        console.log("Time Captured ",$scope.timepass);
    }
 
function convert2string() {
    stringArray = []
    console.log('stringing')
    var asc1 = $scope.decText.split(".")
    for (i = 0; i < asc1.length; i++) {
        stringArray.push(String.fromCharCode(asc1[i]));
    }
    console.log('Original Array', stringArray)
    stringText = stringArray.join().replace(/,/g, '')
    console.log('Original Text', stringText)
    return stringText
}
 
 
});
 