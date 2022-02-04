f_HExiste()

function f_HExiste() {
  for (let i =1; i < 7; i++) {
    if (document.querySelector(`h${i}`) != null){
      const titulo = document.querySelector(`h${i}`);
      titulo.setAttribute('id','titulo');
      criar(titulo);
    };
  };
};

function criar(tituloEncontrado) {

  const aumenta = document.createElement("button");
  const diminui = document.createElement("button");

  tituloEncontrado.setAttribute("id","titulo") ;
  aumenta.textContent = "+";
  tituloEncontrado.append(aumenta);
  aumenta.addEventListener("click", f_aumentarTamanho);

  tituloEncontrado.setAttribute("id","titulo"); 
  diminui.textContent = "-"; 
  tituloEncontrado.append(diminui);
  diminui.addEventListener("click", f_diminuirTamanho);
} 

function iniciar(){

  mudar = document.querySelector("#titulo").style;
  mudar.fontSize = "40px";		
}

function f_aumentarTamanho() { 
  if (parseInt(document.querySelector("#titulo").style.fontSize) < 110) {

      const titulo = document.querySelector("#titulo");

      tamanho = parseInt(titulo.style.fontSize) + 10; 
      titulo.style.fontSize = tamanho + "px";
  }
} 

function f_diminuirTamanho() {

  if (parseInt(document.querySelector("#titulo").style.fontSize) > 25) {

      const titulo = document.querySelector("#titulo");

      tamanho = parseInt(titulo.style.fontSize) - 10;   
      titulo.style.fontSize = tamanho + "px"; 
  }   
}
