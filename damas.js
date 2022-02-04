const tamanhoCelula = 40;
document.body.append(tabuleiro());

function tabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

	tabela.style.borderStyle = 'solid';
	tabela.style.borderSpacing = 0;
	tabela.style.margin = 'auto';
	tabela.style.borderColor = 'black';

for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = '#FA8072';
                celula.classList.add("container");
                if (i * 8 + j <= 24) {
                    celula.append(peca('black'));
                } else if (i * 8 + j >= 40) {
                    celula.append(peca('red'));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}


function peca(cor) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `${cor}.png`);
    imagem.setAttribute('width', `${tamanhoCelula-4}px`);
    imagem.setAttribute('height', `${tamanhoCelula-4}px`);
    imagem.setAttribute('draggable','true');
    imagem.classList.add("draggable");
    return imagem;
}

const arrastar = document.querySelectorAll(".draggable");
const casas = document.querySelectorAll(".container");

arrastar.forEach(movel => {
    movel.addEventListener("dragstart", () => {
        movel.classList.add("dragging");
        
    });
    movel.addEventListener("dragend", () => {
        movel.classList.remove("dragging");
    });
});

casas.forEach(casa => {
    casa.addEventListener("dragover", e => {
        e.preventDefault();
    });
    casa.addEventListener("drop", () => {
        const movel = document.querySelector(".dragging");
        casa.appendChild(movel);
    });
});
