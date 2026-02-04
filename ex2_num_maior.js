const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (numero1) => {
  const n1 = Number(numero1);

  rl.question("Digite outro número: ", (numero2) => {
    const n2 = Number(numero2);

    if(n1 === n2){
            console.log(`${n1} e ${n2} são iguais`)
        }
        else{
    console.log(
      n1 > n2
        ? `${n1} é maior que ${n2}`
        : `${n2} é maior que ${n1}`
    );
        }
    rl.close();
  });
});
