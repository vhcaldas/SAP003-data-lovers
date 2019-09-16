
fetch('data/injuries/injuries.json')
 .then(function(response){
   return response.json()
 })
.then(function(data){
 document.write(data.Year);
})

document.getElementById("enviar").addEventListener("click", localizarTransporte);

function localizarTransporte (cTransp, cAno) {
  console.log(cTransp);
  console.log(cAno);
}
