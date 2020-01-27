import { INJURIES } from "./data/injuries/injuries.js";

//const data = INJURIES;

const receiveAndShowSelection = (event) => {
  event.preventDefault();
  const choosedType = document.getElementById("selectedTransp").value;
  const choosedYear = document.getElementById("selectedYear").value;
  const sentYear = data.searchTheCategory(choosedType, choosedYear);
  document.getElementById("showResult").innerHTML = `Foram registrados ${sentYear} acidentes.`;
};

const receiveYeartoFind = (event) => {
  event.preventDefault();
  const selectedYear = document.getElementById("year-option").value;
  const sentYear = window.data.finding(selectedYear);
  return sentYear;
};

const receiveOrderToSort = (event) => {
  event.preventDefault();
  const increasing = document.getElementById("increasing").value;
  const decreasing = document.getElementById("decreasing").value;
  const selectedYear = document.getElementById("year-option").value;
  const receiveYeartoFind = window.data.finding(selectedYear);
  const sentSelectionOrder = window.data.sorting(increasing, decreasing, receiveYeartoFind, selectedYear);
  return sentSelectionOrder;
};

const sendData = (event) => {
  const increasing = document.getElementById("increasing").value;
  const decreasing = document.getElementById("decreasing").value;
  event.preventDefault();
  const selectedYear = document.getElementById("year-option").value;
  //const selectedOrder = document.getElementById("ordering").value;
  const receiveYeartoFind = window.data.finding(selectedYear);
  console.log(receiveYeartoFind)
  const sentSelectionOrder = window.data.sorting(increasing, decreasing, receiveYeartoFind, selectedYear);
  console.log(sentSelectionOrder)
  let result = document.getElementById("result-2");
  result.innerHTML = "<ul>" + sentSelectionOrder.map(elem => `<li>${Object.keys(elem)} ${Object.values(elem)}</li>`) + "</ul>";
  return "<li>" + sentSelectionOrder + "</li>";
};

document.getElementById("enviar").addEventListener("click", receiveAndShowSelection);

document.getElementById("year-option").addEventListener("change", receiveYeartoFind);

document.getElementById("ordering").addEventListener("change", receiveOrderToSort);

document.getElementById("enviar-2").addEventListener("click", sendData);
