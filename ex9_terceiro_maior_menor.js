const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let array = [];

definir_array();

function definir_array(){
    rl.question("Insira o número de espaços da lista: ", (limite) => {
        let i = Number(limite);
        if (Number.isNaN(i) || i<1){
            console.log("Digite um valor númerico maior que 1.")
            return definir_array();
        }
        else
            popular_array(i);
    })
}

function popular_array(i){
    if(i>0){
            rl.question("Digite o valor para lista: ", (lista) => {
                let number = Number(lista);
                if(Number.isNaN(number))
                    return popular_array();
                array.push(number);
                i--;
                popular_array(i);
            })
        }
    else
        maior_menor();
}

function maior_menor(){
    let maior = -Infinity;
    let maior2 = -Infinity;
    let maior3 = -Infinity;
    let menor = Infinity;
    let menor2 = Infinity;
    let menor3 = Infinity;
    for(let i = 0; i<array.length; i++){
        if(maior < array[i]){
            maior3 = maior2;
            maior2 = maior;
            maior = array[i];
        }
        else if(maior2 < array[i] && array[i] !== maior){
            maior3 = maior2;
            maior2 = array[i];
        }
        else if(maior3 < array[i] && array[i] !== maior && array[i] !== maior2){
            maior3 = array[i];
        }
        if(menor > array[i]){
            menor3 = menor2;
            menor2 = menor;
            menor = array[i];
        }
        else if(menor2 > array[i] && array[i] !== menor){
            menor3 = menor2;
            menor2 = array[i];
        }
        else if(menor3 > array[i] && array[i] !== menor && array[i] !== menor2){
            menor3 = array[i];
        }   
    }
    if(maior2 === -Infinity)
        maior2 = null;
    if(maior3 === -Infinity)
        maior3 = null
    if(menor2 === Infinity)
        menor2 = null;
    if(menor3 === Infinity)
        menor3 = null;
    console.log(`Maior: ${maior}\nSegundo Maior: ${maior2}\nTerceiro Maior: ${maior3}\nMenor: ${menor}\nSegundo Menor: ${menor2}\nTerceiro Menor: ${menor3}`);
    rl.close();
    return;
}