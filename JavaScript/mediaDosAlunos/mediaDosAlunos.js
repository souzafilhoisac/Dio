let alunos = [
    {
        nome: 'FULANO',
        media: 9,
    },
    {
        nome: 'CICLANO',
        media: 7,
    },  
    {  
        nome:'BELTRANO',
        media: 7,
    },
    {
        nome:'JOAO',
        media: 6,
    },
    {
        nome:'JOSE',
        media: 5,
    }
]



function mediaDosAlunos(array,med){
    let alunosAprovados = []
    let alunosReprovados = []
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].media >= 7) {
            alunosAprovados.push(alunos[i])
        } else {
            alunosReprovados.push(alunos[i])
        }
    }
    return alunosAprovados
}

console.log(mediaDosAlunos(alunos,alunos.media))