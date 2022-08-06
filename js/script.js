var slider = document.querySelector(".slider");
var body = document.getElementById("body");
var checkbox = document.getElementById("checkbox");
var card = document.getElementById("card");
var links = document.querySelectorAll(".linkcard");
var icons = document.querySelectorAll(".icon");
var button = document.getElementById("button")


function changeColor() {
  if (checkbox.checked) {
    console.log("marcado");

    body.style.cssText = `background-color: #12C757; transition: 500ms`;
    card.style.cssText = "background-color: #06471F";

    links.forEach((i) => {
      i.style.backgroundColor = "#14A647";
    });

    icons.forEach((i) => {
        i.style.backgroundColor = "#12C757";
        i.style.color = "#06471F"
      });

      button.style.cssText = "background-color: #12C757";

      slider.style.cssText = "background-color: #14A647"
  } else {
   
    body.style.cssText = "background-color: #024959; transition: 500ms";
    card.style.cssText = "background-color: #012e40";

    links.forEach((i) => {
      i.style.backgroundColor = "#024959";
    });

    icons.forEach((i) => {
        i.style.backgroundColor = "#3ca6a6";
        i.style.color = "#012e40"
      });

      button.style.cssText = "background-color: #3ca6a6";

      slider.style.cssText = "background-color: #3ca6a6"

    console.log("desmarcado");
  }
}


