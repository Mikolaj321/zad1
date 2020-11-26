function wyczysc() {
      document.getElementById("output").innerHTML = "0";
}
function removeZero() {
      var value = document.getElementById("output").innerHTML;
      if (value == "0") {
           value = " "
           document.getElementById("output").innerHTML = value;
      }
}
function procent() {
      var value = document.getElementById("output").innerHTML;
      value = value / 100;
      document.getElementById("output").innerHTML = value;
}
function wartosc(value) {
      removeZero()
      document.getElementById("output").innerHTML += value;
}
function wynik() {
     removeZero()
     var equation = document.getElementById("output").innerHTML;
     var solved = eval(equation);
     document.getElementById('output').innerHTML = solved;
}