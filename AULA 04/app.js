/***********************************************************
 * Objetivo: Apresentar uma estrutura de repetição no node.js
 * Autor: Sidney
 * Data: 18/08/2025
 * Versão: 1.0
 ************************************************************/
















// //Gera um número aleatório
// const numeroAleatorio = Math.floor(Math.random() * 101)
// i = numeroAleatorio

// //Importa da biblioteca do readLine para manipular entrada de dados no terminal
// const readLine = require('readline')

// //Criando um objeto de entrada e saída de dados no terminal
// const entradaDeDados = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let condicao = true
// do {
//     entradaDeDados.question('Digite um número: ', function (numeroDigitado) {
//         numero = Number(numeroDigitado)

//         if (numero === i) {
//             condicao = false
//             console.log(`Você venceu! O número premiado é ${i}`)
//             entradaDeDados.close() // encerra o readline
//         } else if (numero > numeroAleatorio) {
//             console.log('O número premiado é menor')
//         } else if (numero < numeroAleatorio) {
//             console.log(' O número premiado é maior')
//         }

//         // Se ainda não acertou, o laço continua
//         if (condicao) {
//             // Chama de novo a pergunta (simula o loop)
//             return
//         }
//     })
// } while (condicao)