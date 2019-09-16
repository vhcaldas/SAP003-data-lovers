
fetch('data/injuries/injuries.json')
 .then(function(response){
   return response.json()
 })
.then(function(data){
 document.write(data.Year);
})

