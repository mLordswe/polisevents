import { srcButton } from "./styles/components/button/button";
import { main } from "./styles/layouts/main/main";
import { newForm } from "./styles/components/form/form";
import { searchField } from "./styles/components/searchfield/searchfield";

//=============HTML===============================
//Create form and searchbutton

export function renderPage() {
  main();
  newForm();
  searchField();
  srcButton();
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
