const data = INJURIES;
const filtroPrincipal = document.getElementById("cTransp");
const mostraDados = document.getElementById("Resultado");


fetch('/data/injuries/injuries.json')
 .then(function(response){
   return response.json()
 }).then(function(data){
 console.log(data);
})



function localizarTransporte (cTransp, cAno) {
  console.log(cTransp);
  console.log(cAno);
}

