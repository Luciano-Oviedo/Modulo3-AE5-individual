//Crea un programa donde se simule el archivo secreto de un superhéroe.

// 1. Crea un objeto llamado superheroe con las siguientes propiedades: nombre (string), edad (number), habilidades (arreglo de strings), activo (booleano), saludo (método que imprima un mensaje personalizado)

var superheroe = {
    nombre: "Moonknight",
    edad: 38,
    habilidades: ["dominio de varias artes marciales", " experto conductor", " pericia como detective"],
    activo: true,
    saludo: function () {
        console.log("¡Hola, soy Moonknight, avatar de Khonshu!");
    }
}

//2. Accede a sus propiedades usando notación de punto y notación de corchetes.

//notación de puntos

console.log("--------------------con notación de puntos--------------------");

console.log(`nombre: ${superheroe.nombre}`);
console.log(`edad: ${superheroe.edad} años`);
console.log(`habilidades: ${superheroe.habilidades}`);
console.log(`activo: ${superheroe.activo}`);
superheroe.saludo();

//notación de corchetes

console.log("--------------------con notación de corchetes--------------------");

console.log(`nombre: ${superheroe["nombre"]}`);
console.log(`edad: ${superheroe["edad"]} años`);
console.log(`habilidades: ${superheroe["habilidades"]}`);
console.log(`activo: ${superheroe["activo"]}`);
superheroe["saludo"]();

//3. Usa el objeto Math para: Calcular una edad aleatoria entre 20 y 40 años. Redondear la edad al entero más cercano. Obtener el valor máximo entre dos niveles de energía.

var superheroe = {
    nombre: "Moonknight",
    edad: function () {
        console.log(`mi edad fue asignada aleatoriamente: ${Math.floor(Math.random() * 21) + 20} años`)
    },
    habilidades: ["dominio de varias artes marciales", "experto conductor", "pericia como detective"],
    activo: true,
    saludo: function () {
        console.log("¡Hola, soy Moonknight, avatar de Khonshu!");
    },
    nivelEnergia: function (a, b) {
        console.log(`mi nivel de energía actual es: ${Math.max(a, b)} puntos`)
    }
}

console.log("-------------------edad aleatoria y nivel de energía----------------------");

superheroe.edad();
superheroe.nivelEnergia(15, 27);

//4. Usa el objeto String para:

//Manipular el nombre(convertirlo a mayúsculas y extraer la primera letra).

function nombreModificado() {
    let nombreMayusculas = superheroe.nombre.toUpperCase();
    let primeraLetra = nombreMayusculas.slice(0, 1);
    console.log(`la primera letra de mi nombre es: ${primeraLetra}`);
}

console.log("--------------------nombre modificado--------------------");

nombreModificado();


//Comparar la versión primitiva y la versión como objeto del nombre.

console.log("--------------------comparación de Strings--------------------");

console.log
let nombrePrimitivo = "Moonknight";
let nombreComoObjeto = new String("Moonknight");

console.log(`comparación de valores nombrePrimitivo == nombreComoObjeto: ${nombrePrimitivo == nombreComoObjeto
    }`);

console.log(`comparación de valores nombrePrimitivo === nombreComoObjeto: ${nombrePrimitivo === nombreComoObjeto
    }`);

console.log(`comparación de tipos nombrePrimitivo === nombreComoObjeto: ${typeof nombrePrimitivo === typeof nombreComoObjeto}`);