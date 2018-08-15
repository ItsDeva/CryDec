crydecApp.controller('cryController', function ($scope) {
    $scope.cryMessage = 'Time will change Everything';
    $scope.cryTitle = 'Enter your text to be Encypted';
    $scope.encryptRawText = function () {
 
        //Text to Be encrypted
        var rawText = $scope.rawText;
        //Password Stuff
        var timepass = $scope.time;
        console.log('Time Stamp ', timepass);
        var dateObj = new Date(timepass);
        dateObj.setSeconds(0);
        var d = Date.parse(dateObj.toString()).toString().substring(0, 10);
        // console.log('d altered',d.toUTCString())
        console.log('d after substring in cry controller ',d)
        // console.log('Substring ',d.toString().substring(0, 10));
        console.log('Current Time Stamp ',Math.round(new Date().getTime()/1000.0))
        //var myDate = new Date(d); --> For extracting the old Date
        var password = $scope.password+d;

        var bf = new Blowfish(password);
        var encrypted = bf.encrypt(rawText);
        var asciiText = [];
 
        $scope.successFlag = "True";       
        $scope.encryptedText = convert2ascii();
        console.log('encryptedText ',encrypted)
        $scope.successMessage = "Encryption Successfull.";
 
 
 
        $scope.copyText = function () {
            var copyTxt = document.getElementById("encText");
            copyTxt.select();
            document.execCommand("copy");
            $scope.copyMessage = "Text Copied";
        }
 
        function convert2ascii() {
            console.log('asciiing')
            for (i = 0; i < encrypted.length; i++) {
                asciiText.push(encrypted.charCodeAt(i));                
            }
            asciiText = asciiText.join().replace(/,/g,'.')
            console.log('Ascii Text' + asciiText)
            return asciiText
        }
 
    }
 
});