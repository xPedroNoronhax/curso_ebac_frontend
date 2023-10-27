function IdentidadeSecreta(identidade){
    let _identidade = identidade

    this.getIdentidade = function(){
        return _identidade
    }

    this.setIdentidade = function(identidadeNome){
        if(typeof identidadeNome === 'string'){
            _identidade = identidadeNome
        }
    }

    this.revelaId = function(){
        console.log(this.nome + ' diz : Meu verdadeiro nome é ' + this.getIdentidade())
    }
}


function Heroi(nome, poder,habilidade,identidade, nomeDoGrupo){
    IdentidadeSecreta.call(this,identidade)
    this.nome = nome
    this.poder = poder
    this.habilidade = habilidade

    Grupo.call(this,nomeDoGrupo)
}

const heroi1 = new Heroi ('Batman', 'Dinheiro', 'detetive')
const heroi2 = new Heroi('Homem Aranha', 'Teia', 'agilidade')

function Grupo(nomeDoGrupo){
    
    let _nomeDoGrupo = nomeDoGrupo

    this.getNomeDoGrupo = function(){
        return _nomeDoGrupo
    }

    this.setNomeDoGrupo = function(nomeDoGrupo){
        _nomeDoGrupo = nomeDoGrupo
    }
}

heroi1.setIdentidade('Bruce Wayne')
heroi2.setIdentidade('Peter Parker')

heroi1.setNomeDoGrupo('Liga da Justiça')
heroi2.setNomeDoGrupo('Os Vingadores')




