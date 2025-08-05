/************************************************************************
 * Objetivo: Criar um sistema que realiza calculos de medias escolares
 *                     (variáveis, conditional, funções)
 * Autor: Sidney
 * Data: 01/08/2025
 * Versão: 1.0
 ************************************************************************/
const MESSAGE_ERROR_EMPTY = 'ERRO:  É obrigatório o preenchimento de todos as informações '
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: Dados inválidos. Você deve entrar com valores entre 0 e 10'
const MESSAGE_ERROR_NAN = 'ERRO: Dados inválidos. No campo de notas só podem ser digitados apenas números'
const MESSAGE_ERROR_NOT_LETTER = 'ERRO: Dados inválidos. No campo de nome só podem ser digitados apenas números'

//Import da biblioteca para calcular  as médias escolares
const mediaEscolar = require('./modulo/media.js')

/**
 * Formas de criar um variável
 * var -> Permite criar um espaço em memória (variável), esse método é
 *        considerado antigo. Obs: caso precise utilizar, aconselha-se
 *        usar for de bloco
 * let -> Permite criar um espaço em memória (variável) apenas dentro de
 *        um bloco de programação (IF, LOOP, Function, etc...). Toda a variável
 *        criada como LET apenas existe dentro daquele bloco de programação
 * const -> Permite criar um espaço em memória (constante) para guardar
 *        conteúdos que não sofrerão mudanças duranrte o programa. Obs: 
 *        Sempre que possível criar a const com letras MAIUCULAS
 *
 * Formas de conversão de tipos de dados
 * String()        -> Converte uma variável em string
 * Number()        -> Converte uma string para numero (inteiro ou float)
 * parseInt()      -> Converte uma string em string somente para inteiro
 * paraseFloat()   -> Converte uma string em string para float
 * Boolean()       -> Converte uma variável para booleano (True/False)
 * Object()        -> Converte uma variável para objeto (ARRAY, JSON, CLASSE)
 * 
 * toUpperCase() -> Formata o conteúdo de uma string em MAIUSCULO
 * toLowerCase() -> Formata o conteúdo de um string em minusculo
 * 
 * toFixed()  -> Permite limitar a quantidade de casas decimais em uma variável númerica
 * 
 * 
 * Operadores de comparação
  
  ==    -> Validação de igualdade de conteúdos
  !=    -> Validação de diferença de conteúdos
  <     -> Validação de valor menor
  <=    -> Validação de valor menor ou igual
  >     -> Validação de maior
  >=    -> Validação de valor maior ou igual 
  ===   -> Validação de igualdade de conteúdo e igualdade de tipo de dados
  !==   -> Validação de diferença de conteúdo e igualdade de tipo de dados
            OBS: Verificar em cada linguagem como isto é tratado
  !=!   -> Validação de diferença de conteúdo e diferença de tipo de dados
            OBS: Verificar em cada linguagem como isto é tratado

 * Operadores de lógicos
    E    AND   &&
    OU   OR    ||
    NÃO  NOT   !

***********************************************************************/




//Importa da biblioteca do readLine para manipular entrada de dados no terminal
var readLine = require('readline')

//Criando um objeto de entrada e saída de dados no terminal
var entradaDeDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o argumento da função e guarda em variável local, em MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()
    
    //Entrada de dados da nota1
    entradaDeDados.question('Digite a nota1: ', function(valor1){
        let nota1 = valor1 

        //Entrada de dados da nota2
        entradaDeDados.question('Digite a nota2: ', function(valor2){
            let nota2 = valor2 

            //Entrada de dados da nota3
            entradaDeDados.question('Digite a nota3: ', function(valor3){
                let nota3 = valor3
                
                //Entrada de dados da nota4
                entradaDeDados.question('Digite a nota4: ', function(valor4){
                    let nota4 = valor4 

                    
                    // Validação
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                        console.log(MESSAGE_ERROR_EMPTY)
                  
                    // Validação para bloquear a entrada de números
                    }else if(!isNaN(nomeAluno)){
                        console.log(MESSAGE_ERROR_NOT_LETTER)
                    
                    // Validação para bloquear a entrada de letras
                    }else if( isNaN(nota1)||isNaN(nota2)||isNaN(nota3)||isNaN(nota4)){
                        console.log(MESSAGE_ERROR_NAN)
                    }else if( Number(nota1) < 0 || Number(nota1) > 10 ||
                              Number(nota2) < 0 || Number(nota2) > 10 || 
                              Number(nota3) < 0 || Number(nota3) > 10 ||
                              Number(nota4) < 0 || Number(nota4) > 10
                            ){
                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                    } else {
                        
                        //Chama a função para calcular a média
                        let media = mediaEscolar.calcularMedia(nota1, nota2, nota3, nota4)
                        
                        //Chama a função para retornar o status da média
                        let statusAluno = mediaEscolar.validarStatusMedia(media)

                        if(statusAluno){
                            console.log(`O aluno(a) ${nomeAluno} teve a média ${media} e esta ${statusAluno}`)
                        }
  

                    }
                })//Fecha a entrada nota4
            })//Fecha a entrada nota3
        })//Fecha a entrada nota2
    })//Fecha a entrada nota1
})//Fecha a entrada nome
