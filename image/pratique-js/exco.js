let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Mozilla est cool, " + myName;
  }
  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Mozilla est cool, " + storedName;
  }
  myButton.addEventListener("click", function () {
    setUserName();
  });  