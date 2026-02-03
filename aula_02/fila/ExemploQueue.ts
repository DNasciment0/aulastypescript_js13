// First In - First Out (Primeiro que entra, é o primeiro que sai)
import leia from "readline-sync";
import Queue = require("./queue");

const fila = new Queue<string>();

fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");
// fila.enqueue(leia.question("Digite um nome: "));
console.log("*** Fila Original ***");
fila.printQueue();

console.log("\n");
console.log("*** Fila Após a remoção de um elemento ***");

fila.dequeue();
fila.printQueue();

console.log("Tamanho da fila: ", fila.count());

let busca = "Erick";
busca.toLocaleLowerCase;

// console.log("O Erick está na fila? ", fila.contains("Erick"));
console.log("O Erick está na fila? ", fila.contains(busca));
