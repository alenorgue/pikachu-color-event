// Pika-pika suerte!

// NO MODIFICAR (salvo para conseguir el color sangría)

//document.querySelector('#first').addEventListener('click', updateBgColor);
//document.querySelector('#second').addEventListener('click', updateBgColor);
//document.querySelector('#third').addEventListener('click', updateBgColor);

// MODIFICAR A PARTIR DE AQUÍ 
//document.querySelector('#fourth').addEventListener('click', updateBgColor);

function updateBgColor(event) {
    let pikachu = document.getElementById('pikachu');
    let color = event.target.dataset.color;
    pikachu.style.backgroundColor = color;

}
let colorBoxes = document.querySelector('.container')

colorBoxes.addEventListener("click", function (event) {
  updateBgColor(event)
});
      