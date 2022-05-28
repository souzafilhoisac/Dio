/*Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
*/

let array1 = [1, 3, 4, 6, 80, 33, 23, 90]

function substituirNumerosPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            array.splice(array[i],1,0)
        }
    }
    return array
}

console.log(array1)
console.log(substituirNumerosPares(array1))

//let nome = 'Isac'

//console.log(nome)