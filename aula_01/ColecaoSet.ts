import leia from "readline-sync";

const cores: Set<string> = new Set<string>();

// Adiciona um valor
cores.add("Azul");
cores.add("Verde");
cores.add("Azul"); // Repetido propositalmente (Coleção Set não aceita dados repetidos)
cores.add("Vermelho");
cores.add("Amarelo");
cores.add(leia.question("Digite uma cor: ")); // fazer inserção de dados

console.table(cores);

// // Verifica se o elemento existe
console.log("O numero 5 existe? ", cores.has("Verde"));

// // Deletar elemento
cores.delete("Azul");

console.table(cores);

for (let cor of cores) {
  console.log(cor);
}