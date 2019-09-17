const data = INJURIES;

let recebeDados = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;
  const year = document.getElementById("cAno").value;
  document.getElementById("Resultado").innerHTML = window.data.transportCategory(chooseTransp, year, array);
}

document.getElementById("enviar").addEventListener("click", recebeDados);

/*
const enviaFiltro = app.filterData(data, menufiltro.value);

menufiltro.addEventListener("change", () => selecionados(enviaFiltro));
*/
