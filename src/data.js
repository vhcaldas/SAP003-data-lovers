const data = INJURIES;


const searchTheCategory = (chooseTransp, Year) => {
  //  let arrResult = [];
    for (let i of data){
      if (i.Year === Year){
      let resultado = (i[chooseTransp]);
      return resultado; 
      }
    }
}
window.searchTheCategory = searchTheCategory;
