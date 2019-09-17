const data = INJURIES;
const filtroPrincipal = document.getElementById("cTransp");
const mostraDados = document.getElementById("Resultado");

filtroPrincipal.addEventListener("change", () => selecionados(app.filterData(data, filtroPrincipal.value)));

window.onload = () => {
    carregarMenuTransp(data);
}

function carregarMenuTransp(data) {
   const transpTypes = [];
   data.map(transp => transp.type.map(type))

}

/*fetch('/data/injuries/injuries.json')
 .then(function(response){
   return response.json()
 }).then(function(data){
 console.log(data);
})



function localizarTransporte (cTransp, cAno) {
  console.log(cTransp);
  console.log(cAno);
}*/
 o map para pegar os objetos , mapeia para pegar obj por obj se o year que foi selecionado for = ao year 
