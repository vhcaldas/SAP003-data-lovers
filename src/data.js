// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
/*const example = () => {
  return "example";
};

window.main {
  localizarTransporte,
}

const mainData = INJURIES;
for (let motorcycle of INJURIES) {
  for (let moto in motorcycle){
    console.log(motorcycle[moto])
  }
  document.write(motorcycle.Total_Injured_Persons_Motorcyclists)

}
function filterData(data, condition) {
  return data.filter(item => item.type.includes(codition));
}
const app = {
  filterData
};*/
window.data = {
  transport = transportCategory
}

function transportCategory(chooseTransp){
  let selectedTransport = "";
  console.log(chooseTransp);
  for (let i in chooseTransp){
    if (chooseTransp[i].checked) {
      const transport = chooseTransp[i].value;
      selectedTransport += myIndicators(INJURIES[ano].Year);
      console.log( myIndicators(INJURIES[ano].Year));
    }
  }
  return selectedTransport;
}

function myIndicators(transportCategory){
  return transportCategory.map((elemento) => elemento.injuriesName);
}

/*fetch('/data/injuries/injuries.json')
 .then(function(response){
   return response.json()
 }).then(function(data){
 console.log(data);
})*/


/*function carregaMenuTipos () {
  console.log(data);
}*/
