const data = INJURIES;

const searchTheCategory = (choosenTransp, year) => {
  //  let arrResult = [];
    for (let i of data){
      if (i.year === year){
      //let result = (i[choosenTransp])
      console.log(i[choosenTransp]);
      }
  }
};

window.searchTheCategory = searchTheCategory;

