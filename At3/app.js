
const msgTotal = document.getElementById("texto")

let contador = Number(localStorage.getItem('contador')) || 0;

document.addEventListener("DOMContentLoaded", (value) =>{
    contador+=1;

    localStorage.setItem("contador", contador);

    msgTotal.textContent = "+1 visualização total de: "+contador;
})

