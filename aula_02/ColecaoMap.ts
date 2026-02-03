import readlinesync = require("readline-sync");

//Não tem indice, apenas CHAVE e VALOR
//Exemplo abaixo: chave numerica e valor string
const participantes: Map<number, string> = new Map<number, string>();

//Adicionar valores com metodo set
participantes.set(1, "Ana");
participantes.set(2, "Samuel");
participantes.set(3, "Leonardo");
participantes.set(4, "Camila");

let matricula = readlinesync.questionInt("Digite o numero da matricula: ");
let nome = readlinesync.question("Digite o nome do participante: ");

participantes.set(matricula, nome);

//Preciso passar chave e valor, porque ele nao trabalha com indice
//É uma desestruturação - guarda o primeiro elemento do objeto na variável matricula
//Depois, o segundo elemento do objeto é guardado na variavel nome
for (let [matricula, nome] of participantes) {
  console.log(`Matricula: ${matricula} - nome ${nome}`);
}

//Checar se um aluno existe atraves da chave
//Devolve como true or false
//Isto é, traz se existe ou nao aquele elemento

console.log("Existe a matricula 2? ", participantes.has(2));

//Encontrar a pessoa pelo nome
//Preciso converter o map em Array
//Quando utilizo values, pego todos os valores. segunda coluna
console.log(
  "Existe a participante Ana?",
  Array.from(participantes.values()).includes("Ana"),
);

//Keys pega só as chaves
//Vai trazer todo mundo, nao importa qual que é
for (let matricula of participantes.keys()) {
  console.log(matricula);
}

//Procurar um valor com base na chave
console.log("Qual é o nome do aluno com a matricula 3? ", participantes.get(3));

//Apagar pessoas da lista
participantes.delete(3);

//Checando se realmente foi apagada
console.table(participantes);
