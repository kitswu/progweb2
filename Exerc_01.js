const subtitulos = document.querySelectorAll("h2");
const topicos = new Array();

subtitulos.forEach(element => {
    topicos.push(element.textContent);
    
    const ancora = createElement('a');
    ancora.setAttribute('name', element.textContent);
    element.append(ancora);
    
    const retorno = document.createElement('a');
    retorno.setAttribute('href', '#');
    retorno.textContent = "início";
    element.parentElement.insertBefore(retorno, element.nextElementSibling);
});

const lista = document.querySelector("ol");
topicos.forEach(topico => {
    const item = document.createElement("li");
    item.textContent = topico;
    lista.append(item);
    
    const link = document.createElement('a');
    link.setAttribute('href', `#${topico}`);
    item.textContent = topico;
    item.append(link);
});
