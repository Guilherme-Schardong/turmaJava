//console.log('ola a todos')
// let frase = 'ola a todos';
// console.log(frase)
// frase = 'funções da turma'
// for(let i =0; i<frase.length; i++){
//     console.log(frase[i])
// }
// let vetor = ['times', 'do', 'brasil']
// let teste= vetor.join('/')
// console.log(teste);

const { obterNumero } = require("./util");




// function saudacao(){
//     console.log('ola a todos');
// }

// saudacao()



//exercicio de teste  calcular o aumaneto salarias de 25% de um funcionario


function calcular_percentual(valor,percentual){
    let conta = valor * (percentual/100)
    return conta
}


function main(){
    //entrada
    const salario = obterNumero('Digite seu salario R$: ')
    const percentual = obterNumero('')
    //processamento
    const aumaneto = calcular_percentual(salario,percentual);
    const salario_novo = salario + aumaneto;
    const valor_previdenciario = calcular_percentual(salario_novo, 17 )
    //saida
    console.log('seu novo salario é : R$ ', salario_novo.toFixed(2));
    console.log('seu novo desconto é R$: ', valor_previdenciario.toFixed(2));
}

main()
