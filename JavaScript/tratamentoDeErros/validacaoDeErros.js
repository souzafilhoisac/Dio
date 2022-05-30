function verificarTamanhoDeArray(array, tamanho){
    const MEU_ERRO_REF = new ReferenceError('Preencha todos os parâmetros.');
    MEU_ERRO_REF.name = 'InvalidReference';

    const MEU_ERRO_TYPE1 = new TypeError('Esse array não é do tipo objeto.');
    MEU_ERRO_TYPE1.name = 'InvalidType';
    
    const MEU_ERRO_TYPE2 = new TypeError('O campo tamanho só pode ser preenchido com números.');
    MEU_ERRO_TYPE2.name = 'InvalidType';
   
    const MEU_ERRO_RANGE = new RangeError('O array não tem o tamanho indicado.');
    MEU_ERRO_RANGE.name = 'InvalidRange';

    try {
        if(!array || !tamanho){
            throw MEU_ERRO_REF;
        } 
        
        if(typeof array !== 'object'){
            throw MEU_ERRO_TYPE1;
        }
        
        if(typeof tamanho !== 'number'){
            throw MEU_ERRO_TYPE2;
        }
        
        if(array.length !== tamanho){
            throw MEU_ERRO_RANGE;
        } 
        
        return array;
        
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log(MEU_ERRO_REF.name)
            console.log(e.message)
        } else if(e instanceof TypeError){
            console.log(MEU_ERRO_TYPE1.name)
            console.log(e.message)
        } else if(e instanceof RangeError){
            console.log(MEU_ERRO_RANGE.name)
            console.log(e.message)
        } else{
            console.log('Tipo de erro não esperado.' + e)
        }
    }
}
let nome;
console.log(verificarTamanhoDeArray([2, 3, 4], 3))