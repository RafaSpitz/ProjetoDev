const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (numero) => {
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("ímpar");
    }
    rl.close();
    });