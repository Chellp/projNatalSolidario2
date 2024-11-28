import {Doacoes} from "./Doacoes";
const doacoes = new Doacoes
 function cadastrar(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nomeDoBrinquedo = document.getElementById("nomeDoBrinquedo").value;
    const genform = document.querySelector('input[name="genform"]:checked').value;
    const telefone = document.getElementById("telefone").value;

    doacoes.cadastrar(nome, email, nomeDoBrinquedo, genform, telefone)

 }
 export{cadastrar}