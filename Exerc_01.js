const topicos = document.querySelectorAll("h2");
const indice = new Array();

topicos.forEach(topico => {
    indice.push(topico.textContent);
});

lista = document.querySelector("ol");
indice.forEach(topico => {
    const item = document.createElement("li");
    item.textContent = topico;
    lista.append(item);
});

function voltar(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*
Não consegui fazer a parte da lista clicável :(
*/