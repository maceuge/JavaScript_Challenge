// ejercicio 7
var base, limite, preg;
var result = 0;
var cont = 1;
var cad = [];

do {
 base = prompt("Ingrese el primer numero");
 limite = prompt("Ingrese el segundo numero");
 preg = confirm("Estas seguro??");
} while (!preg);

while (result < limite - 3) {
   result = base * cont;
   cad.push(result);
   cont++;
}

alert(cad.join(" - "));
