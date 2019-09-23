const data = INJURIES;

let recebeDados = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;
  const Year = document.getElementById("cAno").value;
  
  

  for (let i of data){
      if (i.Year === Year){
        let resultado = (i[chooseTransp]);
        document.getElementById("lista").innerHTML = `${resultado}`;
      }
     
    }
    
  }
  
  document.getElementById("enviar").addEventListener("click", recebeDados);
  
  
 





/*function result()
{
  const chooseTransp = document.getElementById("cTransp").value;
  const Year = document.getElementById("cAno").value;
  let tela = parseInt(chooseTransp)+;
  let calc
}

/*

//document.getElementById("resultado").innerHTML = chooseTransp +", "+ Year;
//console.log(i[data].Year)
    for (let i of array) {

    if(data.Year === Year){
 }
    
 }
  
 //document.getElementById("resultado").innerHTML = window.data.transportCategory(chooseTransp, year, array);
           
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
// o map para pegar os objetos , mapeia para pegar obj por obj se o year que foi selecionado for = ao year
const enviaFiltro = app.filterData(data, menufiltro.value);

menufiltro.addEventListener("change", () => selecionados(enviaFiltro));*/