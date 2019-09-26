const array = INJURIES;

const searchTheCategory = (chooseTransp, Year) => {
  for (let i of array) {
    if (i.Year === Year) {
      return i[chooseTransp];
    }
  }
};

const finding = (selectedYear) => {
  const findedYear = array.find(obj => obj.Year === selectedYear);
  return [
    {
      Total_Injured_Persons_Passenger_Car_Occupants: findedYear["Total_Injured_Persons_Passenger_Car_Occupants"],
      Total_Injured_Persons_Bus_Occupants: findedYear["Total_Injured_Persons_Bus_Occupants"],
      Total_Injured_Persons_Truck_Occupants_Large:findedYear["Total_Injured_Persons_Truck_Occupants_Large"],
      Total_Injured_Persons_Train_Accidents_Rail_Roads:findedYear["Total_Injured_Persons_Train_Accidents_Rail_Roads"],
      Total_Injured_Persons_Recreational_Boating: findedYear["Total_Injured_Persons_Recreational_Boating"],
      Total_Injured_Persons_Air:findedYear["Total_Injured_Persons_Air"],
      Total_Injured_Persons_Pedestrians:findedYear["Total_Injured_Persons_Pedestrians"],
      Total_Injured_Persons_Pedalcyclists: findedYear["Total_Injured_Persons_Pedalcyclists"],
      Total_Injured_Persons_Motorcyclists: findedYear["Total_Injured_Persons_Motorcyclists"]
    }
  ]
}

const sorting = (increasing, decreasing, receivedYeartoFind, selectedYear) => {
  // console.log(increasing, decreasing, receivedYeartoFind, selectedYear);
  if (selectedYear && increasing){
     receivedYeartoFind.sort(function (a,b){
       //o problema está aqui para eu resolver amanhã =/
      if (a < b) {
        return 1
      } if (a > b) {
        return -1
      }
    });

  }


}

window.data = {
  searchTheCategory: searchTheCategory,
  finding: finding,
  sorting: sorting
};

/*filtrei com o fin
criar outro array de objetos*/
