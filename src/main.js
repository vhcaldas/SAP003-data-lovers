const receiveData = (event) => {
  event.preventDefault();
  const choosenTransp = document.getElementById("cTransp").value;
  const year = document.getElementById("cYear").value;
  return window.searchTheCategory(choosenTransp, year);
}
document.getElementById("send").addEventListener("click", receiveData);

