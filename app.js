// Pika-pika suerte!

// NO MODIFICAR (salvo para conseguir el color sangría)

//document.querySelector('#first').addEventListener('click', updateBgColor);
//document.querySelector('#second').addEventListener('click', updateBgColor);
//document.querySelector('#third').addEventListener('click', updateBgColor);

// MODIFICAR A PARTIR DE AQUÍ 
//document.querySelector('#fourth').addEventListener('click', updateBgColor);

function updateBgColor(event) {
    let pikachu = document.querySelector('img');
    let clickedElement = event.target;
    let color = clickedElement.dataset.color;

    if (!color) {
        color = window.getComputedStyle(clickedElement).backgroundColor;
    }

    if (color) {
        pikachu.style.backgroundColor = color;
    }

}
let colorBoxes = document.getElementById('colors')

colorBoxes.addEventListener("click", function (event) {
  updateBgColor(event)
});
      