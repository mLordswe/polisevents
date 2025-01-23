import { newForm } from "./components/form/form";
import { searchField } from "./components/searchfield/searchfield";
import { selectButtons } from "./components/select-filter/select-filter";

//=============HTML===============================
//Create form and searchbutton

export function renderPage() {
  const header = document.querySelector("header") as HTMLElement;
  if (!header) {
    console.error("Header element not found");
    return;
  }

  const formDiv = document.createElement("div") as HTMLDivElement;
  header.appendChild(formDiv);
  formDiv.className = "formDiv";
  formDiv.appendChild(newForm());

  header.appendChild(selectButtons());
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
