const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let array = [];
let num = 0;
let soma = 0;

console.log("Para terminar o array digite X.")

pergunta()

function pergunta() {
  rl.question(`Digite o ${num + 1}° número: `, (rpt) => {
    const entrada = rpt.trim().toUpperCase();
    const numero = Number(entrada);

    if (entrada === "X") {
      rl.close();

      for (let i = 0; i < num; i++) {
        soma += array[i];
      }

      console.log("A soma da lista é", soma);
      return;
    }

    if (Number.isNaN(numero)) {
      console.log("Digite um número ou X.");
      pergunta();
      return;
    }

    array[num] = numero;
    num++;
    pergunta();
  });
}


