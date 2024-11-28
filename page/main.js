import {Doacoes} from "./Doacoes.js";
const doacoes = new Doacoes

const botao = document.getElementById("doar")

botao.addEventListener("click",cadastrarDoacoes);

 function cadastrarDoacoes(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nomeDoBrinquedo = document.getElementById("nomeDoBrinquedo").value;
    const genform = document.querySelector('input[name="genForm"]:checked').value;
    const telefone = document.getElementById("telefone").value;
    
    
    doacoes.cadastrarDoacoes(nome, email, nomeDoBrinquedo, genform, telefone)

    alert ("Cadastro realizado com sucesso")
}
 