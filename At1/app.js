
const mensagemRecepcao = document.querySelector('.msg');
const form = document.querySelector('.formulario');
const input = document.querySelector('#nome')

form.addEventListener("submit", (event) =>{
    event.preventDefault(); 

    const valor = input.value.trim();

    localStorage.setItem("nome", valor);    
})

document.addEventListener('DOMContentLoaded', () => {
    const salvo = localStorage.getItem("nome");

    if(salvo != null){
        mensagemRecepcao.textContent = "Bem vindo! " +salvo+" !"
    }
})

