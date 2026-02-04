const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Digite o número inicial da contagem: ", (numero) => {
    let n = Number(numero);
    for(i = n; i <= n+100; i++)
        console.log(i)
    rl.close();
})