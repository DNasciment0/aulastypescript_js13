import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let i = 0; numeros.size < 10; i++) {
  const valor: number = leia.questionInt(
    `Digite o ${numeros.size + 1}o número: `,
  );

  if (numeros.has(valor)) {
    console.log("Este número já existe na lista. Digite outro !!!.");
  } else {
    numeros.add(valor);
  }
}

console.log("\nListar dados do Set:");
numeros.forEach((num) => {
  console.log(num);
});
