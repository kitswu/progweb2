const textos = document.querySelectorAll('h2');
const topicos = new Array();
textos.forEach(texto => {
    topicos.push(texto.textContent);
    texto.innerHTML = `${texto.textContent} <a href='#'>Retornar</a>`;

});
const sumario = document.querySelector('ol');
topicos.forEach(topico => {
    const item = document.createElement('li')
    const a = document.createElement('a')

    a.href = `#${topico}`
    a.innerHTML = topico

    item.append(a)
    sumario.append(item)
});
