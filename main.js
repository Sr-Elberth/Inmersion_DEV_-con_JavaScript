// pide nombre al usuario
var nombreUsuario = prompt("Por favor, ingrese su nombre: ");

while (true){
// pide legir opcion
var opcion = prompt("Elige una opción:\n1. Conversor de divisas\n2. Conversor de temperaturas.\n3 Salir");

if (opcion ==="1"){
    var cantidadDolares = parseFloat(prompt("Ingrese la cantidad en dólares: "));
    
  // Opcion 1 realiza las conversiones a las monedas | tasa de cambio estatica
  var colonCostarricense = cantidadDolares * 527.53; //
  var euro = cantidadDolares * 0.94; 
  var pesoMexicano = cantidadDolares * 18.13;
  var pesoColombiano = cantidadDolares * 4213.55; // Tasa de cambio ficticia
  var bitcoin = cantidadDolares * 0.000029;

  var resultadoConversor = "Dolares ingresados: "+ cantidadDolares+ "\n"+
    "Cantidad en colones costarricenses: " + colonCostarricense.toFixed(2)+"\n"+ "Cantidad en euros: " + euro.toFixed(2) + "\n" +
    "Cantidad en pesos mexicanos: " + pesoMexicano.toFixed()+"\n"+
    "Cantidad en pesos colombianos: " + pesoColombiano.toFixed(2) + "\n"+
    "Cantidad en bitcoins: " + bitcoin.toFixed(6) ;
    alert(nombreUsuario+  "\n" + resultadoConversor);
}else if(opcion === "2") {
    // Opcion 2 conversor de temperaturas
    // Se pida la temperatura en Celsius
    var temperaturaCelsius =parseFloat(prompt("Ingresa la temperatura en grados Celsius:")) ;

    // crea la conversion de Celsius a Farenheit y Kelvin
    var temperaturaFahrenheit = (temperaturaCelsius * 9/5 ) + 32;
    var temperaturaKelvin = temperaturaCelsius + 273.15;

    var resultadoTemperaturas = "Grados en Celsius: " + temperaturaCelsius + "\n"+ "Temperatura en Fahrenheit: " + temperaturaFahrenheit + "\n"
    + "Temperatura en Kelvin: " + temperaturaKelvin + "\n";

    alert(nombreUsuario+  "\n" + resultadoTemperaturas);
}else if (opcion ==="3") {
    // Opcion 3 el usuaio sale del ciclo y finaliza el programa
    break;
}
}



