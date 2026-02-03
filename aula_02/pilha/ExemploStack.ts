// Remove sempre o último elemento que entrou
import leia from "readline-sync";
import Stack = require("./stack");

const pilha = new Stack<string>();

pilha.push("Renan");
pilha.push("Vivian");
pilha.push("Erick");
// pilha.push(leia.question("Digite um nome: "));
console.log("*** pilha Original ***");
pilha.printStack();
console.log("\n");

pilha.pop();
console.log("*** pilha Após a remoção de um elemento ***");
pilha.printStack();

console.log("Tamanho da pilha: ", pilha.count());

let busca = "Erick";
busca.toLocaleLowerCase;

// console.log("O Erick está na pilha? ", pilha.contains("Erick"));
console.log("O Erick está na pilha? ", pilha.contains(busca));
