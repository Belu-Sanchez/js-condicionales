// alert ('Hola')

//if(condicion da un true o false){accion que va a pasar si lo de los ()es verdadero}

// const edad = 16;
// if(edad >= 18){
//     alert('El usuario es mayor de edad');
// }

// como es falso no se ejecuta

// const edad = 19;
// if(edad >= 18){
//     alert('El usuario es mayor de edad');
//  }
//  si se ejecuta por que es mayor




// const edad = 17;
// if(edad >= 18){
//     alert('Bienvenida a nuestro sitio de bebidas alcoholicas :)');
//  } else {
//      alert('No podemos venderte bebidas alcoholicas');
//  }

//  else se usa para dar una respuesta si es falso


// no me salio

// const edad = prompt ('Cual es tuedad?');

// const verificarEDad = (edad) => {
// if(edad >= 18){
//     alert('Bienvenida a nuestro sitio de bebidas alcoholicas :)');
//  } else {
//      alert('No podemos venderte bebidas alcoholicas');
//  }
// }


//*********************************
//       OPERADORES RELACIONALES
// *********************************
// con un = hacemos una asignacion
//const nombre = 'jonh';

// con dos == iguales compara valores
// console.log(2== '2);

//con tres === conpara valor y tipo de dato
// console.log(2==='2'); // false


//****************************************
//      >, <, >=, <=, ==, ===, !=, !==
// ***************************************


// console.log(Numero('2') + 2);


//**********************************************************
//  EJERCICIO 1- puedeVerPelicula(edad, tieneAutorizacion)
// *********************************************************


//Crear una función puedeVerPelicula que tome como argumentos 
//un número edad y un booleano tieneAutorizacion, y 
//devuelva true si la persona está habilitada para ver la película 
//o false si no. Sólo puede ver la película si: tiene 15 años o más, 
//o tiene autorización de sus padres.

//puedeVerPelicula(12, false) // false
//puedeVerPelicula(12, true)  // true
//puedeVerPelicula(16, false) // true
//puedeVerPelicula(18, true)  // true

//  const puedeVerPelicula =(edad, tieneAutorizacion) => {
//     if(edad >= 15 || tieneAutorizacion === true ){
//         return true
//     } else {
//         return false
//     }
//  }
//  console.log(puedeVerPelicula(12, false));
//  console.log(puedeVerPelicula(12, true));
//  console.log(puedeVerPelicula(16, false));
//  console.log(puedeVerPelicula(18, true));

//************************************************************
//    otra forma de hacer el ejercicio 
// || or - se tienen que cumplir una de las dos condiciones
// ************************************************************

// const edad = prompt ('Cual es tu edad?');
// const tieneAutorizacion = confirm ('Tienes la autorizacion de tus padres?')

//  const puedeVerPelicula =(edad, tieneAutorizacion) => {
//     if(edad >= 15 || tieneAutorizacion === true ){
//         alert('puedes ver la pelicula')
//         return true
//     } else {
//         alert('No puedes ver la pelicula')
//         return false
//     }
//  }

// console.log(puedeVerPelicula(edad, tieneAutorizacion));



//*************************************************
//    otra forma de hacer el ejercicio 
//con && and se tienen que cumplir ambas condiciones 
//para que me de true
// **************************************************

// const edad = prompt ('Cual es tu edad?');
// const tieneAutorizacion = confirm ('Tienes la autorizacion de tus padres?')

//  const puedeVerPelicula =(edad, tieneAutorizacion) => {
//     if(edad >= 15 && tieneAutorizacion === true ){
//         alert('puedes ver la pelicula')
//         return true
//     } else {
//         alert('No puedes ver la pelicula')
//         return false
//     }
//  }

// console.log(puedeVerPelicula(edad, tieneAutorizacion));


//**********************************************************
// si pongo menor de 15 ya no me sale la segunda pregunta
// ********************************************************

// const edad = prompt ('Cual es tu edad?');

//  const puedeVerPelicula =(edad) => {
//     if(edad >= 15){
//         const tieneAutorizacion = confirm ('Tienes la autorizacion de tus padres?');
//        if(tieneAutorizacion === true){
//         alert('puedes ver la pelicula')
//         return true
//         }
//     } else {
//         alert('No puedes ver la pelicula')
//         return false
//     }
//  }

// console.log(puedeVerPelicula(edad));



//*************************************************
//  EJERCICIO 2 - estaEnRango(valor, minimo, maximo)
// **************************************************

//Crear una función estaEnRango que tome como argumentos 
//tres números, un valor, un número minimo y un número maximo, 
//y devuelva true si el valor se encuentra entre los números 
//minimo y maximo o false si no (si el valor es igual a uno de 
//los extremos se considera que está dentro del rango)

// estaEnRango(3, 1, 10)   // true 3 >= 1 Y 3 <= 10
// estaEnRango(1, 1, 10)   // true
// estaEnRango(10, 1, 10)  // true
// estaEnRango(12, 1, 10)  // false
// estaEnRango(-3, 1, 10)  // false

// const estaEnRango = (numero, minimo, maximo) => {
//     if(numero >= minimo && numero <= maximo){
//         return true
//     } else {
//         return false
//     }
// }

// console.log (estaEnRango(3, 1, 10));
// console.log (estaEnRango(1, 1, 10)); 
// console.log (estaEnRango(10, 1, 10));
// console.log (estaEnRango(12, 1, 10)); 
// console.log (estaEnRango(-3, 1, 10)); 


//*************************************************
//  EJERCICIO 3 - esParOImpar(numero)
// **************************************************

//Crear una función esParOImpar que acepte como argumento 
//un numero y devuelva el string par si el numero es par, 
//o el string impar si el numero es impar

// esParOImpar(3)  // 'impar'
// esParOImpar(10) // 'par'

// const esParOImpar = numero =>{
//     if(numero % 2 === 0){
//         return 'par'
//     } else {
//         return 'impar'
//     }
// }

// console.log(esParOImpar(3));
// console.log(esParOImpar(10));

//**********************
//  DE FORMA DINAMICA
// *********************


// const numero = prompt ('Ingresar el numero a evaluar')

// const esParOImpar = numero =>{
//     if(numero % 2 === 0){
//         return 'par'
//     } else {
//         return 'impar'
//     }
// }

// alert ('el numero ingresado es:'+ ' ' + esParOImpar(numero));

//******************************************************************
//              QUE NOS DE UN SALUDO DIFRENTE DEPENDIENDO LA HORA
// *****************************************************************

//1- ENTRE LAS 7HS Y LAS 12HS = BUENOS DIAS
// 2- ENTRE LAS 12:01 Y LAS 19hs =BUENAS TARDE
// 3- ENTRE LAS 19:01HS Y LAS 00hs = BUENAS NOCHES
// 4- ENTRE LAS 00:01HS Y LAS 06:59HS = QUE HACES DESPIESTA?

// const hs = prompt ('Ingresar la hora:');

// const saludar = hs => {
//     if(hs >= 7 && hs < 12){
//         return 'Buenos dias'
//     } else if (hs >= 12 && hs < 19){
//         return 'Buenas tardes'
//     } else if (hs >= 19 && hs <= 24){
//         return 'Buenas noches'
//     } else if (hs >= 0 && hs < 7){
//         return 'Que haces despiesto????'
//     } else {
//         return 'la hora que ingresaste no es valida!!!! Ingresa una hr entre 0 y 24'
//     }
// }

// console.log(saludar(hs));


//**************************************************
//       obtenerGeneracion(anioNacimiento)
// **************************************************

//Crear una función obtenerGeneracion que tome como argumento 
//un número anioNacimiento y devuelva un string con la generación 
//a la que pertenece, siguientdo estas reglas:

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// Millennials	1981-1993
// Generación Z	1994-2010

// const anioNacimiento = prompt ('Ingresa la año de tu nacimiento:')

// const obtenerGeneracion = anioNacimiento => {
//     if(anioNacimiento >= 1949 && anioNacimiento <= 1968){
//         return 'Baby boomer';
//     } else if ( anioNacimiento >= 1969 && anioNacimiento <= 1980){
//         return 'Generacion X';
//     } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993){
//         return 'Millenials';
//     } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010){
//         return 'Generacion Z';
//     } else {
//         return 'Evaluamos solamente entre los años de 1949 y 2010';
//     }    
// }

// alert ('El resultado de la generacion' + " " + obtenerGeneracion(anioNacimiento));

// *************************************************
//      usando let y mensaje =
// **************************************************

// const anioNacimiento = prompt ('Ingresa la año de tu nacimiento:')

// const obtenerGeneracion = anioNacimiento => {
//     let mensaje = '';
//     if(anioNacimiento >= 1949 && anioNacimiento <= 1968){
//         mensaje = 'Baby boomer';
//     } else if ( anioNacimiento >= 1969 && anioNacimiento <= 1980){
//        mensaje = 'Generacion X';
//     } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993){
//         mensaje = 'Millenials';
//     } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010){
//         mensaje  = 'Generacion Z';
//     } else {
//         mensaje = 'Evaluamos solamente entre los años de 1949 y 2010';
//     }    
//     return mensaje;
// }

// alert ('El resultado de la generacion' + " " + obtenerGeneracion(anioNacimiento));


// *************************************************
//            OPERADOR TERNARIO  ?   -   :
// **************************************************

// const edad = prompt ('Cual es tu edad?');
// const permiso = confirm ('Tienes permiso de tus padres?');

// const verificarEdad = (edad, permiso) => {
//     edad >= 18 && permiso === true  // if ()
//         ? alert ('Binvendo a nuestros sitio de bebidas alcoholicas :)') // true
//         : alert('No podemos venderte bebida alcolica'); // false
// }

// verificarEdad (edad, permiso);


// *************************************************
//            avanzarSemaforo(colorActual)
// **************************************************

// Crear una función avanzarSemaforo que acepte como argumento un 
// string colorActual y devuelva un string con el siguiente color 
// del semáforo, siguiendo el
//  orden: verde -> amarillo -> rojo -> verde

// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'

// const avanzarSemaforo = (colorActual) => {
//     if (colorActual === 'verde'){
//         return 'amarillo';
//     } else if ( colorActual === 'amarillo'){
//         return 'rojo';
//     } else if (colorActual === 'rojo'){
//         return 'verde'
//     } else {
//        return alert ('No es un color del semaforo');
//     }
// }

// console.log(avanzarSemaforo('verde'));

//**************************************************
//      CON PROMPT 
//**************************************************

// const colorActual = prompt ('Ingrese un color del semaforo:').toLowerCase();

// const avanzarSemaforo = (colorActual) => {
//     if (colorActual === 'verde'){
//         return 'amarillo';
//     } else if ( colorActual === 'amarillo'){
//         return 'rojo';
//     } else if (colorActual === 'rojo'){
//         return 'verde';
//     } else {
//        return alert ('No es un color del semaforo');
//     }
// }

// console.log(avanzarSemaforo(colorActual));