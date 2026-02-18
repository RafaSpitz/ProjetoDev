const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fs = require("fs");

let opcao;

// =====================
// ESTADO
// =====================
let produtos = [];

if (fs.existsSync("produtos.json")) {
    const dados = fs.readFileSync("produtos.json", "utf-8");
    produtos = JSON.parse(dados);
}

// =====================
// PROGRAMA
// =====================
menu();

// =====================
// MENU
// =====================
function menu() {
    console.log(`
========= MENU =========
1 - Cadastrar produto
2 - Listar produtos
3 - Remover produto
4 - Estatísticas
0 - Sair
========================
    `);

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                cadastrarProduto();
                break;
            case "2":
                listarProdutos();
                break;
            case "3":
                removerProduto();
                break;
            case "4":
                estatisticas();
                break;
            case "0":
                sair();
                break;
            default:
                console.log("Opção inválida.");
                menu();
        }
    });
}

// =====================
// AÇÕES (IO)
// =====================

function salvarProdutos() {
    fs.writeFileSync("produtos.json", JSON.stringify(produtos, null, 2));
}

function cadastrarProduto() {
    rl.question("   Digite o nome do produto: ", (resposta_nome) => {

        rl.question("   Digite o preço do produto: ", (resposta_preco) => {

            let preco = Number(resposta_preco);

            if (Number.isNaN(preco) || preco <= 0) {
                console.log("   Preço inválido.");
                return menu();
            }


            produtos.push({
                nome: resposta_nome,
                preco: preco
            });

            salvarProdutos();

            console.log("   Produto cadastrado com sucesso!");
            menu();

        });

    });
}


function listarProdutos() {
    if (produtos.length === 0) {
        console.log("   Não existem produtos cadastrados.")
    }
    else {
        for (let i = 0; i < produtos.length; i++) {
            console.log(`   Produto ${i + 1}: \n    Nome: ${produtos[i].nome} \n    Valor: ${(produtos[i].preco).toFixed(2)}\n`);
        }
    }
    menu();
}

function removerProduto() {
    if (produtos.length === 0) {
        console.log("   Não existem produtos cadastrados para remover.")
        menu();
    }
    else {
        rl.question("   Digite o Índice do produto: ", (indice) => {
            let numero = Number(indice);
            if (Number.isNaN(numero)) {
                console.log("   O Indice deve ser um número.");
                return removerProduto();
            }
            else if (numero > 0 && numero <= produtos.length) {
                rl.question(`   Deseja excluir o produto : "${produtos[numero - 1].nome}" ? \n  Digite 1 para "SIM" e 2 para "NÃO": `, (resposta) => {
                    let resposta_num = Number(resposta);
                    if (resposta_num === 2) {
                        console.log("   Exclusão cancelada.");
                        return menu();
                    }
                    else if (resposta_num === 1) {
                        produtos.splice((numero - 1), 1);
                        console.log("   Produto Excluído.");
                        salvarProdutos();
                        menu();
                    }
                    else {
                        console.log("   Valor inválido");
                        menu();
                    }
                })

            }
            else {
                console.log("   O indice não existe na lista de produtos.");
                return removerProduto();
            }
        });
    }
}

function estatisticas() {
    if (produtos.length === 0) {
        console.log("   Não existem produtos para mostrar as estátisticas.")
        menu();
    }
    else {
        // total de produtos
        console.log(`   Quantidade de Produtos: ${produtos.length}\n   Soma dos Preços dos Produtos: R$ ${soma_preco_produtos()}\n   Média dos Preços dos Produtos: R$ ${media_produtos()}`);
        // voltar pro menu
        menu();
    }
}

function sair() {
    console.log("Encerrando programa...");
    rl.close();
}

// =====================
// LÓGICA (sem readline)
// =====================

function soma_preco_produtos() {
    let soma = 0;
    for (let i = 0; i < produtos.length; i++) {
        soma = soma + produtos[i].preco;
    }
    return soma.toFixed(2);
};

function media_produtos() {
    return (soma_preco_produtos() / produtos.length).toFixed(2);
};
