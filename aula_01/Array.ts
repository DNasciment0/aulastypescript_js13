import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>();

//numeros.push(1, 2, 3, 4, 5);

numeros.push(leia.questionInt("Digite um numero: "));

//console.table(numeros);

for (let numero of numeros) {
  console.log(numero);
}
