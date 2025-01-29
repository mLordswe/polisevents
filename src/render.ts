import { newForm } from "./components/form";
import { searchField } from "./components/searchfield";
import { selectButtons } from "./components/selectfield";

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

  formDiv.appendChild(selectButtons());
  formDiv.appendChild(searchField());
}

//listener for searchbutton and renders cards with information

//==================Functions========================
