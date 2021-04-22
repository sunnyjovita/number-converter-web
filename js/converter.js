// Whole number check
function wholeNum(stringdec)
{
  var n = parseFloat(stringdec);
  var result = (n - Math.floor(n)) !== 0; 
   
  if (result){
    alert("Number is not a whole number.");
    return false;
  } else {
    return true;
  }
}

// Hex checker
function hexChecker(stringhex){
  regexp = /^-?[0-9a-fA-F]{1,2}$/;
  
  if (regexp.test(stringhex)){
    return true;
  } else {
    alert("Not valid hexadecimal number. (Make sure it is between -FF to FF)");
    return false;
  }
}

// Binary Checker
function binaryCheck(binNum){
    regexp = /^-?[01]{8}$/;
  
    if (regexp.test(binNum))
    {
        return true;
    }
    else
    {
      alert("Not valid binary number. (Make sure your input is 8 bits long.)");
      return false;
    }
 }

// Decimal to Hexadecimal
function decimalToHex(stringdec){
  if (parseInt(stringdec) > 255 || parseInt(stringdec) < -255){
    alert("Decimal out of range!")
  } else {
    if(wholeNum(stringdec)){
      return parseInt(stringdec).toString(16);
    } else {
      return;
    }
  }
}

// Hexadecimal to Decimal
function hexToDecimal(hexNumber){
  if (hexChecker(hexNumber)){
    return parseInt(hexNumber, 16).toString();
  } else {
    return;
  }
} 

// Decimal to Binary
function decToBinary(stringdec) {
  var bits = 8;
  if(wholeNum(stringdec)){
    
    let x = parseInt(stringdec)
    if (x > 255 || x < -255){
      alert("Number out of range!");
    } else {
      var binary = (parseInt(stringdec)).toString(2);
      var binarynum = binary.padStart(bits || bin.length, '0');
      return binarynum.toString();
    }
  } else {
    return;
  }
}

// Binary to Decimal
function binaryToDecimal(stringdec){
  if(binaryCheck(stringdec)){
    if (parseInt(stringdec) > 11111111 || parseInt(stringdec) < -11111111){
      alert("Number out of range!");
    } else {
      return parseInt(stringdec, 2).toString(10);
    }
  } else {
    return;
  }
}

// Decimal to Octal conversion
function decToOctal(stringdec){
  if (wholeNum(stringdec)){
    if (parseInt(stringdec) > 255 || parseInt(stringdec) < -255){
      alert("Number out of range.");
    } else {
      return (parseInt(stringdec)).toString(8);
    }
  } else {
      return;
  }
}

// Octal to Decimal conversion
function octalToDecimal(input){
    if(wholeNum(input)){
      if(parseInt(input) > 377 || parseInt(input) < -377){
        alert("Number out of range!")
      } else {
        let num = input;
        let dec_value = 0;
  
      // Initializing base value to 1, i.e 8^0
        let base = 1;
  
        let temp = num;
        while (temp) {
  
          // Extracting last digit
          let last_digit = temp % 10;
          temp = Math.floor(temp / 10);
  
          // Multiplying last digit with appropriate
          // base value and adding it to dec_value
          dec_value += last_digit * base;
  
          base = base * 8;
        }
      return dec_value.toString();
      }
    } else {
      return;
    }
}

// Decimal to ones complement
function decToFirst(stringdec){
    if (parseInt(stringdec) > 127 || parseInt(stringdec) < -127){
        return "Number out of range!";
    } else {
        if(wholeNum(stringdec)){
            var bits = 8;
            if(stringdec < 0){
                var intdec = parseInt(stringdec);
                var positivebin = Math.abs(intdec);
                console.log(positivebin);
                var binary = (parseInt(positivebin)).toString(2);
            
                var reverse = '';
                for(var i = 0; i<binary.length; i++){
                    reverse += (binary[i] == '0' ? '1' : '0');
                }
            return reverse.padStart(bits || stringdec.length, '1');
            
            } else {
                var binary = (parseInt(stringdec)).toString(2);
                var bits = binary.padStart(bits || binary.length, '0');

                return bits;
            }
        } else {
            return;
        }
    }
}

// One's complement to decimal
function firstscomplementtodec(stringvalue){
  var a = binaryCheck(stringvalue);
    if (a == true){
    
      var negativebinary = (stringvalue[0] == '1');
      if(negativebinary){
        var reverse = '';
        for(var i = 0; i<stringvalue.length; i++){
          reverse += (stringvalue[i] == '0' ? '1' : '0');
        } 
        return (parseInt(reverse,2)*-1);
      }

      else{
      return binaryToDecimal(stringvalue);
      }
    }
    else{
      return;
    }
}

 
// Decimal to Twos complement
function decimalto2scomplement(stringdec){
    if (parseInt(stringdec) > 127 || parseInt(stringdec) < -128){
        return "Number out of range!";
    } else {

      if(wholeNum(stringdec)){
        var bits = 8;

      // for positive number
        if(parseInt(stringdec) >= 0){
          var twoscomp = (parseInt(stringdec)).toString(2);
          // var twoscomp = stringdec.toString(2);
          return twoscomp.padStart(bits || twoscomp.length, '0');
         }

      // for negative number
         else{
          // x power of y
          var binarynum = parseInt((Math.pow(2, 8) + parseInt(stringdec)).toString(2));
          // console.log("binary num" + binarynum);
          // console.log(Math.pow(2, 8) + dec);

          if(Number(binarynum) < 0){
              return undefined;
            }
        }
        return binarynum;
      }
      else{
        return;
      }
   }
} 

// Twos complement to decimal
function twoscomplementtodec(stringvalue){
  if(binaryCheck(stringvalue)){
      // check if the first binary is negative or not
      var negativebinary = (stringvalue[0] == '1');
      if(negativebinary){
        var reverse = '';
        for(var i = 0; i<stringvalue.length; i++){
          reverse += (stringvalue[i] == '0' ? '1' : '0');
        }
        return ((parseInt(reverse,2) + 1 ) * -1).toString();
      }

      // this one is for the first positive binary
      else{
        var bintodec = binaryToDecimal(stringvalue);
        return bintodec.toString();
      }
   }else{
       return;
   }
}

// Checks if only one input and which input field is filled
function inputChecker(inputsArray){
    var count = 0;
    var index = 0;
    for (i=0; i<inputsArray.length; i++){
        if (inputsArray[i] != ""){
            count++;
            index = i;
        }
    }
    if (count == 1){
        return [true, index];
    }
    else if (count == 0){
        alert("Please fill in one input field")
        return [false, undefined];
    }
    else{
        alert("Too many inputs. Click reset and fill in one input");
        return [false, undefined];
    }
}

// Converter
function converter(input, inputIndex) {
    switch (inputIndex) {
        // Decimal
        case 0:
            var decimalResult = input;
            var hexadecimalResult = decimalToHex(input);
            var binaryResult = decToBinary(input);
            var octalResult = decToOctal(input);
            var onesResult = decToFirst(input);
            var twosResult = decimalto2scomplement(input);
            return [decimalResult, hexadecimalResult, binaryResult, octalResult, onesResult, twosResult];
        // Hexadecimal
        case 1:
            // return conversionHack(input, 1)
            if (hexToDecimal(input) == undefined){
              return;
            }else{
              var decimalResult = hexToDecimal(input);
              var hexadecimalResult = input;
              var binaryResult = decToBinary(hexToDecimal(input));
              var octalResult = decToOctal(hexToDecimal(input));
              var onesResult = decToFirst(hexToDecimal(input));
              var twosResult = decimalto2scomplement(hexToDecimal(input));
              return [decimalResult, hexadecimalResult, binaryResult, octalResult, onesResult, twosResult];
            }
        // Binary
        case 2:
          if (binaryToDecimal(input) == undefined){
            return;
          }else{
            var decimalResult = binaryToDecimal(input);
            var hexadecimalResult = decimalToHex(binaryToDecimal(input));
            var binaryResult = input;
            var octalResult = decToOctal(binaryToDecimal(input));
            var onesResult = decToFirst(binaryToDecimal(input));
            var twosResult = decimalto2scomplement(binaryToDecimal(input));
            return [decimalResult, hexadecimalResult, binaryResult, octalResult, onesResult, twosResult]; 
          }
        // Octal
        case 3:
          if (octalToDecimal(input) == undefined){
            return;
          }else{
            var decimalResult = octalToDecimal(input);
            var hexadecimalResult = decimalToHex(octalToDecimal(input));
            var binaryResult = decToBinary(octalToDecimal(input));
            var octalResult = input;
            var onesResult = decToFirst(octalToDecimal(input));
            var twosResult = decimalto2scomplement(octalToDecimal(input));
            return [decimalResult, hexadecimalResult, binaryResult, octalResult, onesResult, twosResult];
          }
        // Ones Complement
        case 4:
            if (firstscomplementtodec(input) == undefined){
              return;
            }else{
              var decimalResult = firstscomplementtodec(input);
              var hexadecimalResult = decimalToHex(firstscomplementtodec(input));
              var binaryResult = decToBinary(firstscomplementtodec(input));
              var octalResult = decToOctal(firstscomplementtodec(input));
              var onesResult = input;
              var twosResult = decimalto2scomplement(firstscomplementtodec(input));
              return [decimalResult, hexadecimalResult, binaryResult, octalResult, onesResult, twosResult];
            }
        // Twos Complement
        case 5:
            if (twoscomplementtodec(input) == undefined){
              return;
            }else{
              var decimalResult = twoscomplementtodec(input);
              var hexadecimalResult = decimalToHex(twoscomplementtodec(input));
              var binaryResult = decToBinary(twoscomplementtodec(input));
              var octalResult = decToOctal(twoscomplementtodec(input));
              var onesResult = decToFirst(twoscomplementtodec(input));
              var twosResult = input;
              return [decimalResult, hexadecimalResult, binaryResult, octalResult, onesResult, twosResult];
            }
        default:
            alert("Something went wrong. Too bad lol");
            return;
    }
}

// Function to begin the conversion
function startConversion(dec, hex, bin, oct, one, two){
    var decimal = document.getElementById(dec).value;
    var hexadecimal = document.getElementById(hex).value;
    var binary = document.getElementById(bin).value;
    var octal = document.getElementById(oct).value;
    var ones = document.getElementById(one).value;
    var twos = document.getElementById(two).value;

    var inputs = [decimal, hexadecimal, binary, octal, ones, twos];
    var inputIds = [dec, hex, bin, oct, one, two];

    var inputCheckResult = inputChecker(inputs);
    var isSingleInput = inputCheckResult[0];
    var inputIndex = inputCheckResult[1];
    
    if(isSingleInput){
        var outputs = converter(inputs[inputIndex], inputIndex);
        // Autofill
        for(i=0;i<inputs.length;i++){
            document.getElementById(inputIds[i]).value = outputs[i];
        }
    }else{
        return;
    }
}

function resetFields() {
    document.getElementById('converter-form').reset();
}