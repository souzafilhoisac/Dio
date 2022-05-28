let pali1 = "isac"
//let pali2 = pali1.split('').reverse()

//console.log(pali2)
//Solução 1
function detectorDePalindromo(string) {
    if(!string || Number(string)) {
        return `Por favor, digite uma String válida.`
    }
    
    let pali1 = string.split('').reverse().join('');

    if(string === pali1){
        return `A String ${string} é um palíndromo`;
    } else {
        return `A String ${string} não é um palíndromo.`
    }
}

console.log(detectorDePalindromo('ama'));

//Solução 2
//Nessa solução vamos fazer uma comparação das extremidades da string, não havendo necessidade do loop percorrer todo o array
function detectorDePalindromo2(string){
    if(!string || Number(string)) {
        return `Por favor, digite uma String válida.`;
    }
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return `A String ${string} não é um palíndromo.`;
        } else {
            return `A String ${string} é um palíndromo`;
        }
    }
}

console.log(detectorDePalindromo2('radar'))

/*
function findMax(){
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

console.log(findMax(2,9,15,45,6,8,7,9,33,221,5,436,7))
*/
