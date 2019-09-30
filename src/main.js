let data = INJURIES;

const receiveAndShowSelection = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;
  const Year = document.getElementById("cYear").value;
  const sentYear = window.data.searchTheCategory(chooseTransp, Year);
  document.getElementById("lista").innerHTML = `Foram registrados ${sentYear} acidentes.`;

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
  return sentSelectionOrder
}

const sendData = (event) => {
  event.preventDefault();
  const selectedYear = document.getElementById("year-option").value;
  const receiveYeartoFind = window.data.finding(selectedYear);
  const sentSelectionOrder = window.data.sorting(increasing, decreasing, receiveYeartoFind, selectedYear);
  let result = document.getElementById('result-2');
  result.innerHTML = '<ul>' + data.map(receiveYeartoFind).map(sentSelectionOrder).join('') + '</ul>';
  return '<li>' + sortedArray + '</li>'
}

document.getElementById("enviar").addEventListener("click", receiveAndShowSelection);

document.getElementById("year-option").addEventListener("change", receiveYeartoFind);

document.getElementById("ordering").addEventListener("change", receiveOrderToSort);

document.getElementById("enviar-2").addEventListener("click", sendData);
