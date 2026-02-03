import leia from "readline-sync";

const numeros: Array<number> = new Array<number>();

// Adiciona um número ao Array
numeros.push(5);
numeros.push(1, 5, 7, 9);
numeros.push(leia.questionInt("Digite um numero: ")); // fazer inserção de dados
// console.table(numeros);

for (let numero of numeros) {
  console.log(numero);
}
// Verifica se o elemento existe
console.log("O numero 5 existe? ", numeros.includes(5));

// Verifica o indíce do elemento
console.log("O indice do número 7: ", numeros.indexOf(7));

// Deletar elemento (quantos você quer apagar, a partir do indíce indicado)
numeros.splice(numeros.indexOf(7), 2);

console.table(numeros);