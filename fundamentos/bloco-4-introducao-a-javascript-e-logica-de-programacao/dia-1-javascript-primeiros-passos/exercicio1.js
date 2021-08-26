// // exercicio 1

// const a = 5;
// const b = 6;

// const soma = a+b;
// const subtracao = a-b;
// const multiplicacao = a*b;
// const divisao = a/b;
// const modulo = a%b;

// console.log(soma);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);



// //exercicio 2

// const a = 7;
// const b = 6;

// if (a > b){
//     console.log(a)
// }else if(a < b){
//     console.log(b)
// }else{
//     console.log("Números iguais")
// }


// // exercicio 3

// const a = 7;
// const b = 8;
// const c = 8;

// if (a > b && a > c){
//     console.log(a);
// }else if (b > a && b > c){
//     console.log(b);
// }else if (c > a && c > b){
//     console.log(c);
// }else{
//     console.log(" Há números iguais");
// }


// // exercicio 4 

// const a = -4;

// if (a > 0){
//     console.log("Positive");
// }else{
//     console.log("Negative");
// }


// // exercício 5

// const a = 40;
// const b = 60;
// const c = 80;
// const soma = (a + b + c);

// if (soma === 180){
//     console.log(true);
// }else{
//     console.log(false);
// }


// exercicio 6

//???????



// // exercício 7
// const nota = 80;

// if (nota >= 90 && nota <= 100){
//     console.log("A");
// }else if (nota >= 80 && nota < 90){
//     console.log("B");
// }else if (nota >= 70 && nota < 80){
//     console.log("C");
// }else if (nota >= 60 && nota < 70){
//     console.log("D");
// }else if (nota >= 50 && nota < 60){
//     console.log("E");
// }else if (nota < 50 && nota >=0){
//     console.log("F");
// }else {
//     console.log("Erro, número inválido");
// }

// // exercício 8 

// const a = 7;
// const b = 7;
// const c = 7;

// if (a % 2 ===0 || b % 2 ===0 || c % 2 ===0 ){
//     console.log(true);
// }else{
//     console.log(false);
// }


// // exercício 9

// const a = 8;
// const b = 8;
// const c = 8;

// if ( a % 2 != 0 || b % 2 != 0 || c % 2 != 0 ){
//     console.log(true);
// }else{
//         console.log(false);
//     }


// // exercício 10

// const valorCusto = 100;
// const valorVenda = 200;
// const valorCustoTotal = valorCusto + (valorCusto * 1,20);
// const lucro = valorVenda - valorCustoTotal;

// if (valorCusto < 0 ){
//     console.log("Erro, valor inváldo");
// }else{
//     console.log("Lucro por produto: R$" + lucro)
//     console.log("Lucro após 1000 unidade vendidas: R$" + (lucro*1000))
// }



//exercício 11

let salarioBruto = 4000;
let salarioLiquido;
let salarioPosINSS;

if (salarioBruto <= 1556,94){
    salarioPosINSS = (salarioBruto * 0,92);
}else if (salarioBruto > 1556,94 && salarioBruto <= 2594,92) {
    salarioPosINSS = (salarioBruto * 0,91);
}else if (salarioBruto > 2594,93  && salarioBruto <= 5189,82) {
    salarioPosINSS = (salarioBruto * 0,89);
}else if (salarioBruto > 5189,82){
    salarioPosINSS = (salarioBruto - 570,88);
}else{
    console.log("Salário inválido");
}


if (salarioPosINSS <= 1903,98){
    salarioLiquido = salarioPosINSS;
}else if(salarioPosINSS > 1903,98 && salarioPosINSS <= 2826,56){
    salarioLiquido = (salarioPosINSS - ((salarioPosINSS *0,075) - 142,80));
}else if (salarioPosINSS > 2826,56 && salarioPosINSS  <= 3751,05){
    salarioLiquido = (salarioPosINSS - ((salarioPosINSS *0,15) - 354,80));
}else if (salarioPosINSS > 3751,05 && salarioPosINSS  <= 4664,68){
    salarioLiquido = (salarioPosINSS - ((salarioPosINSS * 0,225) - 636,13));
}else if (salarioPosINSS > 4664,68){
    salarioLiquido = (salarioPosINSS - ((salarioPosINSS * 0,275) - 869,36));
}else{
    console.log("Salário inválido");
}

console.log("Salário líquido: R$" +salarioLiquido);
