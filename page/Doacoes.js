class Doacoes {
    constructor(nome, email, nomeDoBrinquedo, genform, telefone) {
        this.nome = nome;
        this.email = email;
        this.nomeDoBrinquedo = nomeDoBrinquedo;
        this.genform = genform;
        this.telefone = telefone;
        this.doacoes = [];
}

cadastrarDoacoes(nome, email, nomeDoBrinquedo, genform, telefone) {
    const novoDoacoes = new Doacoes(nome, email, nomeDoBrinquedo, genform, telefone)
    this.doacoes.push(novoDoacoes);
}

}
export{Doacoes}