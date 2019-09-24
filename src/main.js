let receiveData = (event) => {
  event.preventDefault();
  const chooseTransp = document.getElementById("cTransp").value;
  const Year = document.getElementById("cYear").value;
  let tela = window.searchTheCategory(chooseTransp, Year);
  document.getElementById("lista").innerHTML = tela;
  
  }
  
document.getElementById("enviar").addEventListener("click", receiveData);
   
 






























  

