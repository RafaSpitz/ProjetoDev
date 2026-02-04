const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

ler_string();

function ler_string(){
    rl.question("Escreva uma String para ser invertida: ", inverter_string);
}

function inverter_string(string){
    let a;
    let array = [];
    array = string.split("");
    for(let i=0; i<array.length/2; i++){
        a = array[array.length-(i+1)];
        array[array.length-(i+1)] = array[i];
        array[i] = a;
        console.log(array);
    }
    console.log(array.join(""));
    rl.close();
}