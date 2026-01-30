import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
  const cor = leia.question("Digite uma cor: ");
  cores.push(cor);
}

console.log("\nListar todas as cores:");
for (let cor of cores) {
  console.log(cor);
}

cores.sort();

console.log("\nOrdenar as cores:");
for (let cor of cores) {
  console.log(cor);
}
