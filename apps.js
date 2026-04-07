/* const r = require('readline-sync');  18.1k (gzipped: 6.9k)

let nota;

do{
    nota = parseFloat(r.question("Digite a nota (0-10): "));

    if( nota < 0 || nota > 10 ){
        console.log("Nota inválida. Digite uma nota (0 a 10).");
    }
      

    
}while ( nota < 0 || nota > 10);

console.log("Nota válida: " + nota);

 */
/* const r = require('readline-sync');
//variaveis
let soma = 0;
let contador = 1;

// contador para controlar o numero de notas
while (contador <= 5) {

    // solicita a nota do usuário
    let nota = parseFloat(r.question(`nota ${contador}`));

    // realizar calculo de notas, 4 notas
    soma += nota;

    //incrementar o contador para a proxima nota
    contador++;
}

//define a media a soma de 4 notas dividida por 4 para obter a media
let media = soma / 5;

//exibir a media
console.log("A mmedia e: " + media.toFixed(2)); // toFixed(2) para exibir a media com 2 casas decimais
 */
const r = require('readline-sync');

//media com do while

let somaDoWhile = 0;
let contadorDoWhile = 1;

do {
    let nota = parseFloat(r.question(`nota ${contadorDoWhile}: `));
    somaDoWhile += nota;
    contadorDoWhile++;
 } while (contadorDoWhile <= 5);

let mediaDoWhile = somaDoWhile / 5;
console.log("A media do while e: " + mediaDoWhile.toFixed(2));


