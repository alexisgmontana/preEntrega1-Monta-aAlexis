// Analizaremos el descuento por la compra de aberturas con medida standard

let corrediza = 10000
let desplazable = 8000
let pañoFijo = 5000
let precioFinal;
let precioConDescuento;

alert('A continuación debe indicar la compra a realizar. Si usted supera el monto de $50000, tendrá un descuento del 10%')

function calcularPrecio(){
  cantidadCorredizas = parseInt(prompt("¿Cuantas corredizas quiere?"));
  cantidadDesplazables = parseInt(prompt("¿Cuantas desplazables quiere?"));
  cantidadPañosFijos = parseInt(prompt("¿Cuantos paños fijos quiere?")); 
  precioFinal = (corrediza*cantidadCorredizas + desplazable*cantidadDesplazables + pañoFijo*cantidadPañosFijos);
  precioConDescuento = (precioFinal*0.9);
}

function calcularDescuento(){
  if (precioFinal >= 50000){
    alert('El precio final con descuento es: ' + '$' + precioConDescuento);
  }else{
    alert('El precio final es: ' + '$' + precioFinal);
  }
}

calcularPrecio();

calcularDescuento();

let compra = prompt('¿Quiere realizar otra compra?, escriba "si" para realizarla, o cualquier otro caracter para salir')

while (compra == 'si'){
  calcularPrecio();
  calcularDescuento();
  compra = prompt('¿Quiere realizar otra compra?, escriba "si" para realizarla, o cualquier otro caracter para salir')
}

alert('Muchas gracias!')