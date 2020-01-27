import { INJURIES } from "./data/injuries/injuries.js";

//const data = INJURIES;

const searchTheCategory = (selectedTransp, selectedYear) => {
  for (let i of INJURIES) {
    if (i.Year === selectedYear) {
      return i[selectedTransp];
    }
  }
};

const finding = (selectedYear) => {
  const findedYear = INJURIES.find(obj => obj.Year === selectedYear);
  return [
    {
      Car: findedYear["Total_Injured_Persons_Passenger_Car_Occupants"],
      Bus: findedYear["Total_Injured_Persons_Bus_Occupants"],
      Truck: findedYear["Total_Injured_Persons_Truck_Occupants_Large"],
      Train: findedYear["Total_Injured_Persons_Train_Accidents_Rail_Roads"],
      Boat: findedYear["Total_Injured_Persons_Recreational_Boating"],
      Air: findedYear["Total_Injured_Persons_Air"],
      Pedestrians: findedYear["Total_Injured_Persons_Pedestrians"],
      Bycicle: findedYear["Total_Injured_Persons_Pedalcyclists"],
      Motorcyclists: findedYear["Total_Injured_Persons_Motorcyclists"]
    }
  ];
};

const sorting = (increasing, decreasing, receivedYeartoFind, selectedYear) => {
  if (selectedYear && increasing) {
    const sortedData = receivedYeartoFind.sort((a, b) => (a.value > b.value) ? 1 : -1);
    return sortedData;
  } if (selectedYear && decreasing) {
    const sortedData = receivedYeartoFind.sort((a, b) => (a.value > b.value) ? 1 : -1);
    const result = sortedData.reverse();

    
    return result;
  }
};

window.data = {
  searchTheCategory: searchTheCategory,
  finding: finding,
  sorting: sorting
};
