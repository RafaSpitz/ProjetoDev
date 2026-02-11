const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let i = 1;
let maior = 0;
let menor = 0;
let soma = 0;
let array = [];

lista();

function lista() {
    if (i <= 5) {
        rl.question(`Digite o ${i} número da lista: `, (resposta) => {
            let numero = Number(resposta);
            if (Number.isNaN(numero)) {
                console.log("Digite um número.");
                return lista();
            }
            else {
                array.push(numero);
                i++;
                return lista();
            }
        })
    }
    else {
        rl.close();
        classificar();
    }
}

function classificar() {
    maior = array[0];
    menor = array[0];
    for (i = 0; i < array.length; i++) {
        soma = soma + array[i];
        if (maior < array[i])
            maior = array[i];
        if (menor > array[i])
            menor = array[i];
    }
    console.log(`Lista: ${array} \n Média: ${soma / array.length}\n Maior: ${maior}\n Menor: ${menor}`)
}