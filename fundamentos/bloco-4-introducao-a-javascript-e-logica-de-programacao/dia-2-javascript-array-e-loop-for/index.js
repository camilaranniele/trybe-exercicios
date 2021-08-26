// // Exercício 1 - imprimir valores do array

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for ( let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }

// // Exercício 2 somar os valores do array

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1 ){
//     soma += numbers[index];
// }
// console.log(soma);


// // Exercício 3 média aritmética dos valores do array

// let soma = 0;


// for (let index = 0; index < numbers.length; index += 1 ){
//     soma += numbers[index];
// }
// let media = soma / numbers.length;
// console.log(media);


// // Exercício 4 do exercício anterior imprimir se o valor é maior que 20

// if (media > 20){
//     console.log("Valor maior que 20");
// }else{
//     console.log("Valor menor ou igual 20");
// }


// // Exercício 5 Maior valor do array

// let maiorNumero = numbers[0];

// for (let index = 1; index < numbers.length ; index += 1){
//     if (numbers[index] > maiorNumero){
//         maiorNumero = numbers[index];
//     }
// }
// console.log(maiorNumero);


// // Exercício 6 Quantidade de números ímpares

// let contador = 0;

// for ( let i = 0; i < numbers.length; i +=1){
//     if (numbers[i] % 2 != 0 ){
//         contador ++;
//     }
// }
// if (contador === 0){
//     console.log("Nenhum valor ímpar encontrado");
// }else{
//     console.log(contador);
// }



// // Exercício 7  menor valor do array

// let menorValor = numbers[0];

// for (let i = 1; i < numbers.length; i += 1){
//     if (numbers[i] < menorValor){
//         menorValor = numbers[i];
//     }
// }
// console.log(menorValor);


// // Exercício 8 criar um array de 1 a 25

let array = [];

for (let i = 1; i <= 25; i += 1){
    array.push(i);
}
console.log(array);


// Exercício 9  imprima o resultado da divisão de cada um dos elementos por 2 .


for (let index = 0; index < 25; index += 1){
    console.log(array[index] / 2);
}
