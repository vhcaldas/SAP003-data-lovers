const data = INJURIES;

let recebeDados = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;

  const Year = document.getElementById("cAno").value;
//console.log(chooseTransp);

  for (let i of data){
      if (i.Year === Year){
     //    return getElementById("msgresultado").innerHTML += `<p>O numero de acidentes e de ${i[chooseTransp]}</p>`;
         
      }
    //   console.log(i[data].Year)
  }
 /* selectFiltro = document.getElementById("caixas-de-selecao");
  selectFiltro.addEventListener("change", filterData);
  
    function filterData() {
     const filtrado = PRODUCTS.filter (item =>
     item.product.price.value >= parseFloat 
     (selectFiltro.value));
     showTransporte(filtrado);*/
  }
  
      //selectFiltro.addEventListener("change", () => showTransporte(app.filterData(PRODUCTS, parseInt (selectFiltro.value))))

// document.getElementById("resultado").innerHTML = chooseTransp +", "+ Year;


document.getElementById("enviar").addEventListener("click", recebeDados);


/*function showTransporte(arrayItems){
    let productDiv = document.getElementById("products");
    productDiv.innerHTML =
    ${arrayItems.map(("products") =>)}
}*/

       


/*const searchForTransport = (chooseTransp, Year, array) => {


} 

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