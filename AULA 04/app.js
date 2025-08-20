/***********************************************************
 * Objetivo: Apresentar uma estrutura de repetição no node.js
 * Autor: Sidney
 * Data: 18/08/2025
 * Versão: 1.0
 ************************************************************/
 
//Gera um número aleatório
const numeroAleatorio = Math.floor(Math.random() * 101)
let i = numeroAleatorio

//Importa da biblioteca do readLine para manipular entrada de dados no terminal
const readLine = require('readline')

//Criando um objeto de entrada e saída de dados no terminal
const entradaDeDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let condicao = true // Esta variável não é mais necessária para o loop, mas a mantive para mostrar a lógica

console.log('--- Jogo de Adivinhação ---');
console.log('Tente adivinhar o número que eu pensei (entre 1 e 100)!')
let contadorVezes = 1
function fazerPergunta() {
    entradaDeDados.question('Digite um número: ', (numeroDigitado) => {
        const numero = Number(numeroDigitado)
        if (numero === numeroAleatorio) {
            console.log(`Você VENCEU! O número premiado era ${numeroAleatorio}`)
            entradaDeDados.close()
            console.log(`Você utilizou ${contadorVezes} vezes para vencer`)
        } else {
            if (numero > numeroAleatorio) {
                console.log('O número premiado é MENOR. Tente de novo.')
            } else {
                console.log('O número premiado é MAIOR. Tente de novo.')
            }

            contadorVezes++
            fazerPergunta()
        }
    });
}
fazerPergunta()