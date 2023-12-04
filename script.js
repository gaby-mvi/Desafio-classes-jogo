class tipoHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        //tipos - guerreiro, mago, monge, ninja
    }

    dadosHeroi(){
        console.log(`O heroi se chama ${this.nome} e tem ${this.idade} anos!`)
    }

    atacar(poder){
        if (this.tipo === "mago") {
            poder = "magia"
        } else if (this.tipo === "guerreiro") {
            poder = "espada"
        } else if (this.tipo === "monge") {
            poder = "artes marciais"
        } else {
            poder = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${poder}.`)
    }
}

let primeiroHeroi = new tipoHeroi ("Kira", "25", "ninja")
let segundoHeroi = new tipoHeroi ("Fred", "22", "mago")

primeiroHeroi.dadosHeroi()
primeiroHeroi.atacar()
segundoHeroi.dadosHeroi()
segundoHeroi.atacar()