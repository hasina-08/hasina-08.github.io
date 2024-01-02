function slider(anything){
  document.querySelector('.competance').src = anything; 
  setTimeout(function () {
    resetImage();
  }, 500000);

}
function resetImage() {
  document.querySelector('.competance').src = './image/competance/illustration.jpg';
}


const btn = document.querySelector(".burger");

btn.addEventListener('click', function() {
    try {
        // Utilisez une redirection basée sur le chemin relatif ou absolu vers votre nouvelle page
        window.location.href = "index.html";
    } catch (error) {
        console.error("Erreur de redirection :", error);
    }
});

