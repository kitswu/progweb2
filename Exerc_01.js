const textos = document.querySelectorAll('h2')
const sumario = document.querySelector('ol')
const topicos = []

const newAnchor = (href, text) => {
    const anchor = document.createElement('a')
    anchor.href = href
    anchor.innerHTML = text
    return anchor
}

const addReturn = texto => {
    topicos.push(texto.textContent)
    const a = newAnchor('#', 'Retornar')
    texto.innerHTML = texto.textContent
    texto.append(a)
}

const addTopic = topico => {
    const item = document.createElement('li')
    const a = newAnchor(`#${topico}`, topico)
    item.append(a)
    sumario.append(item)
}

textos.forEach(addReturn)
topicos.forEach(addTopic)
