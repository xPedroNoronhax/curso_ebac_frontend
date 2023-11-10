const alunos = [
    {
        nome : 'Pedro',
        nota : 7
    },
    {
        nome : 'Muriel',
        nota : 10
    },
    {
        nome : 'João',
        nota : 5
    },
    {
        nome : 'Ana',
        nota : 6
    },
    {
        nome : 'Otávio',
        nota : 4
    },
    
]

function Aprovados(){
    let alunosAprovados = alunos.filter(function(aluno){
        return aluno.nota >= 6
    }) ;
    return (console.log(alunosAprovados))
    
}

Aprovados(alunos)











// class Aluno {
//     constructor(nome,nota){
//         this.nome = nome
//         this.nota = nota
//     }
// }

// let aluno1 = new Aluno('Pedro', 7)
// let aluno2 = new Aluno('Muriel', 10)
// let aluno3 = new Aluno('João', 5)
// let aluno4 = new Aluno('Ana', 6)
// let aluno5 = new Aluno('Otávio', 4)

// console.log(Aluno.nome)