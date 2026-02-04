const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let array = [];
let i = 0;

listagem();

function listagem() {
    if (i === 10) {
        rl.close();
        maior(array);
        return;
    }

    rl.question(`Digite o ${i + 1}° número da lista: `, (num_lista) => {
        array[i] = Number(num_lista);
        i++;
        listagem();
    });
}

function maior(array) {
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    console.log(`O maior número da lista (${array}) é: ${maior}`);
}
