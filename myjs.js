var numberOne;
var numberTwo = "";
var operationTomake = "";



//esta funcion solo sirve para coger el primer numero y guardarlo y resetar el display
function clickNumber(obj){


 var myresultsNumber = document.getElementById("mydisplay");
 if (obj.value != "+" && obj.value != "-" &&  obj.value != "*" && obj.value != "/") {
   myresultsNumber.innerHTML += obj.value;

 }else {

   var getDisplayNumberOne = document.getElementById("mydisplay").innerHTML;
   //alert(getDisplayNumberOne);
   numberOne = getDisplayNumberOne;
   clearDisplay();

   var operation = ["suma" , "resta" , "multiplicar" , "dividir"];

   switch (obj.name) {
     case operation[0]:
        //alert("es suma");

        numberOne = getDisplayNumberOne;
        operationTomake = "suma";
        clearDisplay();


       break;
      case operation[1]:
          //alert("es resta");
          numberOne = getDisplayNumberOne;
          operationTomake = "resta";
          clearDisplay();

        break;
      case operation[2]:
          //alert("es multiplicar")
          numberOne = getDisplayNumberOne;
          operationTomake = "multiplicar";
          clearDisplay();
        break;
      case operation[3]:
          //alert("es dividir")
          numberOne = getDisplayNumberOne;
          operationTomake = "dividir";
          clearDisplay();
        break;



   }


 }



console.log(obj.innerHTML);
console.log(obj.value);
}



function clearDisplay(){
  var myresultsNumber = document.getElementById("mydisplay");
  myresultsNumber.innerHTML="";
}



function getNumberTwoandResolve(){
  numberTwo = document.getElementById("mydisplay").innerHTML;


  console.log(operationTomake);
  //alert(numberTwo);

  let resultFinal = 0;
  switch (operationTomake) {
    case "suma":
        resultFinal = parseFloat(numberOne) + parseFloat(numberTwo);
        //alert(resultFinal);
        document.getElementById("mydisplay").innerHTML = resultFinal;

      break;
    case "resta":
        resultFinal = parseFloat(numberOne) - parseFloat(numberTwo);
        //alert(resultFinal);
        document.getElementById("mydisplay").innerHTML = resultFinal;
      break;

    case "multiplicar":
        resultFinal = parseFloat(numberOne) * parseFloat(numberTwo);
        //alert(resultFinal);
        document.getElementById("mydisplay").innerHTML = resultFinal;
      break;
    case "dividir":
        resultFinal = parseFloat(numberOne) / parseFloat(numberTwo);
        //alert(resultFinal);
        document.getElementById("mydisplay").innerHTML = resultFinal;
      break;
  }

}

function resetOneandTwoandOperation(){
  var numberOne = "";
  var numberTwo = "";
  var operationTomake = "";
  clearDisplay();
}
