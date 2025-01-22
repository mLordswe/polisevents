// import { srcButton } from "./components/button/button";
// import { main } from "./layouts/main/main";

import { newForm } from "./components/form/form";
import { searchField } from "./components/searchfield/searchfield";

//=============HTML===============================
//Create form and searchbutton

export function renderPage() {
  const main = document.querySelector("main") as HTMLDivElement;
  const header = document.querySelector("header") as HTMLElement;
  main.appendChild(newForm());

  header.appendChild(searchField());
}

//listener for searchbutton and renders cards with information

//==================Functions========================

// function errorMsgForSearch() {
//   console.log("felaktig input");
//   searchField.style.border = "red 2px solid";
//   searchField.value = "";
//   searchField.placeholder = "Felaktig input, ex Stockholm";
//   main.style.display = "none";
// }
