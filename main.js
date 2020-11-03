//Poner listener
addEventListener('click', openCard)
//Dentro del callback función  acceder al target
function openCard(e){
  if(e.target.classList.contains("card"))
e.target.classList.toggle('cover')  
}
//preguntar si ese target es div o card
//si ya tiene la clase cover quitarla o visceversa