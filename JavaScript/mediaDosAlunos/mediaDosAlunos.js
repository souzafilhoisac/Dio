/*Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

//Primeira resolução

let alunos = [
    {
        nome: 'FULANO',
        turma: 'A',
        media: 9,
    },
    {
        nome: 'CICLANO',
        turma: 'C',
        media: 7,
    },  
    {  
        nome:'BELTRANO',
        turma: 'B',
        media: 8,
    },
    {
        nome:'JOAO',
        turma: 'A',
        media: 6,
    },
    {
        nome:'JOSE',
        turma: 'C',
        media: 5,
    }
];



function mediaDosAlunos(array, med){
    let alunosAprovados = [];
    for(let i = 0; i < array.length; i++){

        const {media, nome} = array[i];

        if(!array) {
            return 'Por favor, preencha todos os campos'
        } else if(media >= med){
            alunosAprovados.push(nome);
        }
    }
    return alunosAprovados;
}

console.log(mediaDosAlunos(alunos, 7));