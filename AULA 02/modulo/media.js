/************************************************************************
 * Objetivo: Arquivo responsável por calcular e validar médias escolares
 * Autor: Sidney
 * Data: 05/08/2025
 * Versão: 1.0
 ************************************************************************/
//Função para calcular a média escolar
function calcularMedia(valor1, valor2, valor3, valor4) {
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    let media = (nota1 + nota2 + nota3 + nota4)/4
    return Number(media).toFixed(1)

}

function verificarStatusAluno(media){
    let statusAluno
    if(media >= 7 && media <= 10){
        statusAluno = 'APROVADO'
    }else if(media < 7 && media >= 5){
        statusAluno = 'EXAME'
    }else if (media < 5 && media > 0){
        statusAluno = 'REPROVADO'
    }
    return statusAluno

}
console.log(verificarStatusAluno('9.1'))