const array = INJURIES;

const searchTheCategory = (chooseTransp, Year) => {
  //  let arrResult = [];
  for (let i of array) {
    if (i.Year === Year) {
      let resultado = (i[chooseTransp]);
      return resultado;
    }
  }
};
window.data = {
  searchTheCategory: searchTheCategory,
};
