/***********************************************************
 * Objetivo: Apresentar comandos básicos do node.js
 * Autor: Sidney
 * Data: 29/07/2025
 * Versão: 1.0
 ************************************************************/

//Comentário em linha
/*
    Comentário em bloco
*/

//Import da classe readLine do node.JS
var readLine = require('readline')

//Cria uma interface de comunicação com o terminal para a entrada e saída de dados
//interagindo com o usuário
var entradaDeDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function(nome){

    var nomeUsuario = nome
    //Validação de entrada de dados
    if(nomeUsuario == ''){
        console.log('ERRO: Não foi possível processar a requisição, campo obrigatório')
    } else {
        //String() -> converte uma variavel em String
        //toUpperCase() -> converte o conteudo de uma variavável em MAISCULO
        console.log('o nome digitado foi: ' + String(nomeUsuario).toUpperCase())
        console.log(nome)
    }

    

})





/*
//Permite escrever o conteúdo de uma String ou objeto no terminal
console.log("Aula 01 de node.JS")

//Permite criar uma variável
var nome = 'Sidney'

//Exemplo de concatenação de conteúdos (String + variável)
console.log('O nome digitado foi: ' + nome + '!')

//Concatena usando a crase no lugar da aspas, para colocar a veriavel dentro do bloco
console.log(`O nome digitado foi: ${nome}!`)

//typeof() -> Retorna o tipo de dados de uma variável
console.log(typeof(nome))

*/