import { Stack } from "./Stack";
import leia from "readline-sync";

const pilha = new Stack<string>();
let opcoes: string;

do {
  console.log("                      MENU LIVRARIA                         ");
  console.log("************************************************************");
  console.log("1 - Adicionar Livro na pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da pilha");
  console.log("0 - Sair");
  console.log("************************************************************");

  opcoes = leia.question("Digite a opcao desejada: ");

  switch (opcoes) {
    case "1":
      pilha.push(leia.question("Digite o nome do Livro: "));
      pilha.printStack();
      console.log("Livro Adicionado!");
      break;

    case "2":
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        pilha.printStack();
      }
      break;

    case "3":
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        const livroRetirado = pilha.pop();
        console.log(`\nO Livro "${livroRetirado}" foi retirado da pilha!`);
        pilha.printStack();
      }
      break;

    case "0":
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpção Inválida!");
      break;
  }
} while (opcoes !== "0");
