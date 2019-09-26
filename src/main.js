const receiveData = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;
  const Year = document.getElementById("cYear").value;
  const result = window.data.searchTheCategory(chooseTransp, Year);
  document.getElementById("result-1").innerHTML = result;

};

const receiveYeartoFind = (event) => {
  event.preventDefault();
  const selectedYear = document.getElementById("year-option").value;
  const sentYear = window.data.finding(selectedYear);
  return sentYear;
  /*const layout = `
   '<p>Total bla: ${result["Total_Injured_Persons_Passenger_Car_Occupants"]}</p>
    <p>Total bla: ${result["Total_Injured_Persons_Bus_Occupants"]}</p>
    <p>Total bla: ${result["Total_Injured_Persons_Truck_Occupants_Large"]}</p>
    <p>Total bla: ${result["Total_Injured_Persons_Train_Accidents_Rail_Roads"]}</p>
    <p>Total bla: ${result["Total_Injured_Persons_Recreational_Boating"]}</p>
    <p>Total bla: ${result["Total_Injured_Persons_Air"]}</p>
  `
  document.getElementById("result-2").innerHTML = layout;*/
};

const receiveOrderToSort = (event) => {
  event.preventDefault();
  const increasing = document.getElementById("increasing").value;
  const decreasing = document.getElementById("decreasing").value;
  const selectedYear = document.getElementById("year-option").value;
  const receiveYeartoFind = window.data.finding(selectedYear);
  const sentSelectionOrder = window.data.sorting(increasing, decreasing, receiveYeartoFind, selectedYear);
  return sentSelectionOrder;
}

document.getElementById("enviar").addEventListener("click", receiveData);

document.getElementById("year-option").addEventListener("change", receiveYeartoFind);

document.getElementById("ordering").addEventListener("change", receiveOrderToSort);
