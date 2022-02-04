document.querySelector("#ddd").addEventListener("change",f_encontraCidade); 

const lista = document.querySelector('ul');

function f_encontraCidade(evento) { 
  
    fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
    .then(Encontrar => Encontrar.json())
    .then(DDDCidade => { 

        MostraDDD(DDDCidade.cities);
    }); 
};

function MostraDDD(cidades) {

    lista.innerHTML = "<ul> </ul>";

    cidades.forEach (cidade => {

        const item = document.createElement ('li'); 

        item.textContent = cidade;
        lista.append(item);   
    });
}; 
