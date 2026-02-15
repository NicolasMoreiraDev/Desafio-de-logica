class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = ""
        switch(this.tipo) {
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi0 = new Heroi("Gandalf", 1000, "mago")
let heroi1 = new Heroi("Riven", 25, "guerreiro")
heroi0.atacar()
heroi1.atacar()