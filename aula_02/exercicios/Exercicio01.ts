import { Queue } from "./Queue";
import leia from "readline-sync";

const fila = new Queue<string>();
let opcoes: string;

do {
  console.log("                      MENU FILA                             ");
  console.log("************************************************************");
  console.log("1 - Adicionar Cliente na Fila");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Retirar Cliente da Fila");
  console.log("0 - Sair");
  console.log("************************************************************");

  opcoes = leia.question("Digite a opcao desejada: ");

  switch (opcoes) {
    case "1":
      fila.enqueue(leia.question("Digite o nome do Cliente: "));
      fila.printQueue();
      console.log("Cliente Adicionado!");
      break;

    case "2":
      if (fila.isEmpty()) {
        console.log("\nA fila está vazia.");
      } else {
        fila.printQueue();
      }
      break;

    case "3":
      if (fila.isEmpty()) {
        console.log("\nA fila está vazia.");
      } else {
        const cliente = fila.dequeue();
        console.log(`\nCliente ${cliente} foi chamado.`);
        console.log("Cliente retirado da fila");
        fila.printQueue();
      }
      break;

    case "0":
      console.log("\nPrograma finalizado!");
      break;

    default:
      console.log("\nOpção Inválida.");
      break;
  }
} while (opcoes !== "0");
