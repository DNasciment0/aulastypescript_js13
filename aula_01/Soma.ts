import leia from "readline-sync";

let qualquerCoisa: any; // Serve para qualquer coisa, number, string, boolean, etc...

let numero1: number, numero2: number;
let mensagem: string;

numero1 = leia.questionFloat("Digite o primeiro numero:");
numero2 = leia.questionFloat("Digite o segundo numero:");

console.log(`${numero1} + ${numero2} é = ${numero1 + numero2}`);
