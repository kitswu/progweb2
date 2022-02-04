f_HExiste()

function f_HExiste() {
  for (let i =1; i < 7; i++) {
    if (document.querySelector(`h${i}`) != null){

      const titulo = document.querySelector(`h${i}`);

      titulo.setAttribute('id','titulo');
      
      f_criar(titulo);
    };
  };
};

function f_criar(tituloEncontrado) {

  const aumenta = document.createElement("button");
  const diminui = document.createElement("button");

  aumenta.textContent = "+";
  diminui.textContent = "-"; 

  tituloEncontrado.append(aumenta);
  tituloEncontrado.append(diminui);

  aumenta.addEventListener("click", f_aumentarTamanho);
  diminui.addEventListener("click", f_diminuirTamanho);
};

function iniciar(){

  mudar = document.querySelector("#titulo").style;
  mudar.fontSize = "40px";		
};

function f_aumentarTamanho(titulo) { 

  const titulo = document.querySelector("#titulo");

  if (parseInt(titulo.style.fontSize) < 110) {

      tamanho = parseInt(titulo.style.fontSize) + 10; 
      titulo.style.fontSize = tamanho + "px";
  };
};

function f_diminuirTamanho(titulo) {

  const titulo = document.querySelector("#titulo");

  if (parseInt(document.querySelector("#titulo").style.fontSize) > 25) {

      tamanho = parseInt(titulo.style.fontSize) - 10;   
      titulo.style.fontSize = tamanho + "px"; 
  };   
};
