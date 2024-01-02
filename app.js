        
const menu = document.querySelector(".nav-principal");
const btn = document.querySelector(".burger");
const acceuil = document.querySelector('.prest');
const menuLink = document.querySelector(".menu");

// Fonction pour réinitialiser les styles
function resetStyles() {
    acceuil.classList.remove('hidden');
    menu.classList.remove('hidden');
    menuLink.classList.remove('hidden');
}

btn.addEventListener('click', function () {
    acceuil.classList.toggle('hidden');
});

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

menuLink.addEventListener('click', function () {
    menuLink.classList.toggle('hidden');
});

// Ajoutez un écouteur d'événements pour l'élément avec l'ID "precedant"
document.getElementById('precedant').addEventListener('click', resetStyles);

// Appel de la fonction resetStyles lorsque la page est chargée
document.addEventListener('DOMContentLoaded', resetStyles);

  