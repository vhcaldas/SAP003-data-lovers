const data = INJURIES;

let recebeDados = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;
  const year = document.getElementById("cAno").value;
  console.log(chooseTransp,year);
  //document.getElementById("Resultado").innerHTML = window.data.transportCategory(chooseTransp, year, array);
}

document.getElementById("enviar").addEventListener("click", recebeDados);

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
 //o map para pegar os objetos , mapeia para pegar obj por obj se o year que foi selecionado for = ao year

/*
const enviaFiltro = app.filterData(data, menufiltro.value);

menufiltro.addEventListener("change", () => selecionados(enviaFiltro));
*/

