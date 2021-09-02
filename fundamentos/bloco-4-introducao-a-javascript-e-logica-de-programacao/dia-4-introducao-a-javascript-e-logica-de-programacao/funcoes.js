////// Exercício 1 //////

// function isPalindrome(string){
//     reverseWord = string.split('').reverse().join('');
//     if (string === reverseWord){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isPalindrome('arara'));
// console.log(isPalindrome('desenvolvimento'));


////// Exercício 2 //////

// function returnHigherNumber(arr){
//     let maiorNumero = arr [0];
//     let indice;
//     for (let i = 0; i <= arr.length; i +=1 ){
//         if (arr[i] > maiorNumero){
//             maiorNumero = arr [i];
//             indice = i; 
//         }
//     }
//     return indice
// }

// let array = [2, 3, 6, 7, 10, 1];
// console.log(returnHigherNumber(array));

////// Exercício 3 //////
// function menorNumero(arr){
//     let menorNumero = arr [0];
//     let indice;
//     for (let i = 0; i <= arr.length; i +=1){
//         if (arr[i] < menorNumero){
//             menorNumero = arr[i];
//             indice = i;
//         }
//     }
//     return indice
// }

// let arr = [2, 4, 6, 7, 10, 0, -3];
// console.log(menorNumero(arr));



////// Exercício 4 //////

// function maiorString(arr){
//     let maiorNome = arr[0];

//     for ( let i = 0; i < arr.length; i += 1){
//         if (arr[i].length > maiorNome.length){
//             maiorNome = arr[i];
//         }
//     }
//     return maiorNome
// }
// let nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// console.log(maiorString(nomes));



////// Exercício 5 //////



////// Exercício 6 //////
// function sum (number){
//     let sum = 0;

//     for (let i = 1; i <= number; i += 1){
//         sum += i;
//     }
//     return sum
// }

// let number = 10;
// console.log(sum(number));


////// Exercício 7 /////// problema: como retornar o false ?

// function confira (word, ending){
//     let novaPalavra = word.substring(1); 
//     for (let i = 1; i <= novaPalavra.length; i += 1 ){
//         let novaPalavra = word.substring(i);
//         if (novaPalavra === ending){
//             return true
//         }
//     }
// }

// let palavra = "camila";
// let fim = "mila";
// console.log(confira(palavra,fim));


function highestCount(arr){
    let highestNumber = arr[0];
    let sum = 1;
    for (let index = 1; index < arr.length; index += 1){
        if (arr[index] > highestNumber){
            
            highestNumber = arr[index];
            
            sum = 0;
            
            sum += 1;
            
        }else if ( arr[index] === highestNumber){
            sum += 1;
        }
    }
    return sum
}

let array =  [0, 0, 0];
console.log(highestCount(array));
