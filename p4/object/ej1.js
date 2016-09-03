
var animal = {
    nombre: "pepe",
    altura: 1.75,
    peso: 1,
    carnivoro: true,
    vuela: false,
    color: "rojo",
    saludar: function () {
        console.log("hola " + this.nombre);
    }
}
  
for (propiedad in animal) {
  console.log(propiedad + " " + animal[propiedad]);
}
