//  LOCAL STORAGE
//1 - Buscar os botões do html pelo id 

const lightBtn = document.getElementById('light-mode');
const darkBtn = document.getElementById('dark-mode')

//2 - função que sera responsavel por aplicra o tema 
 
function aplicarTema(tema){
    //se o tema escolhido for "dark", adiciona a classe CSS .dark no body
    if(tema === "dark"){
        document.body.classList.add('dark');
    }else{
        //Caso contrario(tema claro), remova a classe .dark do body
        document.body.classList.remove('dark');
    }

    //3 - precisa salvar a escolha do usuario(dark ou light) no local storage do navegador

    localStorage.setItem("tema", tema);
}
    //4 - buscar o tema salvo no local storage ; se não houver nenhum tema salvo(primeiro acesso), tema: light

    const temaSalvo = localStorage.getItem("tema") || "light";

    //5 - Aplica o tema imediatamente ao carregar a pagina

    //6 - Adiciona o evento do clique no modo claro

    lightBtn.addEventListener('click', () => aplicarTema('light'));

    //7 - Adicionar o evento de click no modo escuro

    darkBtn.addEventListener('click', () => aplicarTema('dark'));




