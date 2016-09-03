
var intervalo = 3000;
var hacer = true;
var cont = 1;
var idInterval;


function saludar () {
   if (hacer) {
    document.write("<p>Hola! " + cont + "</p>" + "<button onclick=cancelar()>Cancelar</button> " + " <button onclick=continuar()>Continuar</button>");
    cont++;
  } else {
    document.write("<h3>Esto es todo amigos!</h3>");
    clearInterval(idInterval);
  }
}

function cancelar () {
  clearInterval(idInterval);
}

function continuar () {
idInterval = setInterval(saludar, intervalo);
}

continuar();
