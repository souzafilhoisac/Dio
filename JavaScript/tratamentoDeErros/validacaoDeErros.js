function verificarTamanhoDeArray(array,tamanho){
    const MEU_ERRO_REF = new ReferenceError('[Preencha todos os parâmetros.');
    MEU_ERRO_REF.name = 'InvalidReference';
    const MEU_ERRO_TYPE1 = new TypeError('Esse array não é do tipo objeto.');
    MEU_ERRO_TYPE1.name = 'InvalidType'
    const MEU_ERRO_TYPE2 = new TypeError('O campo tamanho só pode ser preenchido com números.');
    MEU_ERRO_TYPE2.name = 'InvalidType'
    const MEU_ERRO_RANGE = new RangeError('O array não tem o tamanho indicado.');
    MEU_ERRO_RANGE.name = 'InvalidRange'

    if(!array || !tamanho){
        throw `${MEU_ERRO_REF.name} : ${MEU_ERRO_REF}`
    } else if(!Object(array)){
        throw `${MEU_ERRO_TYPE1.name} : ${MEU_ERRO_TYPE1}`
    } else if(!Number(tamanho)){
        throw `${MEU_ERRO_TYPE2.name} : ${MEU_ERRO_TYPE2}`
    } else if(array.length !== tamanho){
        throw `${MEU_ERRO_RANGE.name} : ${MEU_ERRO_RANGE}`
    }
}

function tryCatchTamanhoDeArray(){
    try {
        verificarTamanhoDeArray(array,tamanho)
    } catch (error) {
        console.log(error)
    }
}