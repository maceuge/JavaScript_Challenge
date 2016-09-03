do {
  var num1 = prompt("Ingrese el primer numero");
  var num2 = prompt("Ingrese el segundo numero");
  var preg = confirm("Estas seguro??");

} while (!preg);

(num1 > num2)?alert("El numero: " + num1 + " es el mayor!"):alert("El numero: " + num2 + " es el mayor!");
