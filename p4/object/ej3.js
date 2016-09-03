var animal = {
    nombre: "pepe",
    altura: 1.75,
    peso: 1,
    carnivoro: true,
    vuela: false,
    color: "rojo",
    saludar: function () {
        console.log("Hola " + this.nombre);
    }
}

function recObjeto (objeto, atrib, value) {
  objeto[atrib] = value;
  for (prop in objeto) {
   if (typeof objeto[prop] === "function") {
       objeto[prop]();
   } else {
      console.log(prop + " " + objeto[prop]);
   }
 }
}

recObjeto(animal, "patas", "dos");
