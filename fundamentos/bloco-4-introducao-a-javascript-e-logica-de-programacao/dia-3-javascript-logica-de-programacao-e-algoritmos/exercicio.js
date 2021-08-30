
// Exercício 1 



// for ( let i = 1; i <= n; i += 1){
//     for (let index = 1; i <= n; i += 1){
//         console.log("*".repeat(n));
//     }
// }


// // Exercício 2
// let n = 5; 
// for (let i = 1; i<= n; i += 1){  
//      console.log("*".repeat(i));
// }

// // Exercício 3
// for (let i = 1; i <= n; i += 1){
//     let conta = n - i ;
//     console.log(" ".repeat(conta) + "*".repeat(i));
// }



// Exercício 4
let n = 8;
for (let i = 1; i <= n; i += 1) {
    if (i % 2 === 1 && n % 2 === 1) {
      let conta = (n - i) / 2;
      console.log(" ".repeat(conta) + "*".repeat(i) + " ".repeat(conta));
    } else if (i % 2 === 0) {
      let conta = (n - i) / 2;
      console.log(" ".repeat(conta) + "*".repeat(i) + " ".repeat(conta));
    }
  }