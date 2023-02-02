// Inserta dos números e indica cual de los dos es el mayor

let num1 = 21;
let num2 = 45;


if(num1 > num2){
    console.log("El mayor es ", num1);

} else if(num1 < num2){
    console.log("El numero mayor es ", num2);

}else {
    console.log("Los números son iguales");
};



// Ejemplo con una una lines; (ternarias)

let numero1 = 100;

if(numero1 > 50){
    console-log("Numero1 es un número grande");
}else{
    console.log("Numero1 es un número pequeño");
}; 

// La ternaria es la siguiente:

let resultado = (numero1 > 50) ? "Numero1 es grande" : "Numero1 no es grande"; 
    console.log(resultado);

// El ? sustituye el if y los dos puntos el else. Si se cumple la condición entre parentesis se imprimirá la primera frase, si no, se imprimirá la segunda.


// WHILE

let contador = 0;

while (contador <=20){
    contador++;
    console.log(contador);
};

// ++ suma 1 al número inicial



// DO WHILE se utilia cuando quieres que algo se repita PERO el primero lo hará siempre. 

let numero = 100; 

do{
    console.log("Hola");
    numero--;
}while (numero < 99); 

// FOR a diferencia de los demás aquí sabes exactamente las vueltas que dará el bucle

for(let i = 0; i <= numero; i++){
    console.log(i);
};

// En el for ponemos la variable que va a contar dentro del for (let i = x). El resto de variables se declaran fuera del bucle


// Ej:1. Pida un número por prompt, acto seguido irá restando ese número hasta llegar a 0 (usando un bucle), cada uno de los números que devuelva la resta en el bucle, hay que decir por console.log si ese número es par.

let numAleatorio = 0
parseInt(prompt("Escribe un número aleatorio")); 

    while (numAleatorio > 0){
        if(numAleatorio % 2 === 0){
            console.log("es par ", numAleatorio)
        }
        numAleatorio--;
}


    for(let i = numAleatorio; i > 0; i--){
        if(i % 2 === 0){
            console.log(i);
        }
}

// Como ampliación al ejercicio anterior, ahora hará una suma de todos los pares y lo mostrará mediante console.log una vez haya salido del bucle, además de ello, para sufrimiento del alumnado, no sólo nos dirá si un número es par, también nos dirá si es impar, en vez de un if else , usareis una ternaria.

let resultado3 = 0

while (numAleatorio > 0){
    if(numAleatorio % 2 === 0){
        console.log("es par ", numAleatorio);

        resultado3 += numAleatorio;
        // resultado3 = resultado3 + numAleatorio;
    }else {
        console.log("Es impar ", numAleatorio)
    }
    numAleatorio--;
}

// Ahora con una ternaria

let numberParNumbers = 0

while (number > 0) {
    number%2 != 0 ? (
        console.log(numAleatorio + " es un número impar")
    ) : (
        console.log(numAleatorio + " es un número par"), 
        totalParNumbers += numAleatorio
    );
    number --;
} 

console.log("La suma total de los números pares es " + totalParNumbers);


// Ej 3. Calculadora inversa

let num1 = parseInt((prompt("Introduce el primer valor")));
let num2 = parseInt((prompt("Introduce el segundo valor")));

let signo = prompt("Dime el signo de la operación").toLowerCase();

switch(signo){

    case '+':
    case 'suma':

        console.log(num1 + num2);

    break;

    case '-':
    case 'resta':

        console.log(num1 - num2);

    break;

    case '/':
    case 'division':

        console.log(num1 / num2);   

    break;

    case '*':
    case 'multiplicacion':

        console.log(num1 * num2);

    break;

    default:
        console.log("Nooooooo! no has dicho nada coherente");

};

