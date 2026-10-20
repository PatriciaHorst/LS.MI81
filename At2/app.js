
const form = document.getElementById('formulario');
const inputNome = document.getElementById('nome-tarefa');
const msg = document.getElementById('msg-sucesso')

const lista = JSON.parse(localStorage.getItem('lista')) || [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const salvarNome = inputNome.value.trim();
    localStorage.setItem('nome2', salvarNome);
    
    lista.push(salvarNome);
    
localStorage.setItem("lista", JSON.stringify(lista));
})

document.addEventListener("submit", (event) =>{
let nomeSalvo = localStorage.getItem("nome2");

if(nomeSalvo != null){
    msg.textContent = "Sua tarefa foi catalogada!"+nomeSalvo;
} 
})
