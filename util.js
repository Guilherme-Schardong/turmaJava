var prompt= require('prompt-sync')();


function obterTexto(descricao){
    return prompt(descricao)
}

function obterNumero(descricao){
    return Number(obterTexto(descricao));
}

module.exports={
    obterTexto, obterNumero
}