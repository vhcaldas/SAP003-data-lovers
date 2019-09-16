// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
const example = () => {
  return "example";
};

window.example = example;
const mainData = INJURIES;
console.log(mainData);

for (let motorcycle of INJURIES) {
  for (let moto in motorcycle){
    // console.log(typeof moto);
    console.log(motorcycle[moto])
  }
  document.write(motorcycle.Total_Injured_Persons_Motorcyclists)
  //return document.write(Total_Injured_Persons_Motorcyclists);
}


