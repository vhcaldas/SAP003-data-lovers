let receiveData = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;
  const Year = document.getElementById("cYear").value;
  let tela = window.searchTheCategory(chooseTransp, Year);
  document.getElementById("lista").innerHTML = tela;
  
  }
  
  document.getElementById("enviar").addEventListener("click", receiveData);
   
 






























  //document.getElementById("lista").innerHTML = `${resultado}`;
  /*const receiveData = (event) => {
    event.preventDefault();
    const choosenTransp = document.getElementById("cTransp").value;
    const year = document.getElementById("cYear").value;
    return window.searchTheCategory(choosenTransp, year);
  }
  document.getElementById("send").addEventListener("click", receiveData


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