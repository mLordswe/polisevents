import { getData } from "./main";
import { ApiResponse } from "./types";

import { getMapLocation } from "./main";
//=============HTML===============================
//Create form and searchbutton
const body = document.querySelector("body");
let main: HTMLElement = body?.appendChild(
  document.createElement("main")
) as HTMLElement;
main.setAttribute("id", "main");
main.style.display = "none";
const newForm = body?.appendChild(document.createElement("form"));
newForm?.setAttribute("id", "newForm");

const searchField: HTMLInputElement = newForm?.appendChild(
  document.createElement("input")
) as HTMLInputElement;
searchField?.setAttribute("text", "input");
const searchButton: HTMLButtonElement = newForm?.appendChild(
  document.createElement("button")
) as HTMLButtonElement;
searchButton?.setAttribute("button", "submit");
searchButton?.setAttribute("id", "formbutton");
searchButton.innerHTML = "Sök";
//listener for searchbutton and renders cards with information
newForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchValue: any = searchField.value;
  const data = await getData(searchValue);
  makeCards(data);
  main.style.display = "inline-block";
  getMapLocation(data);
});
//==================Functions========================
function makeCards(arrayToRender: ApiResponse[]) {
  for (const key of arrayToRender) {
    // create article containing event card
    if (key.name && key.summary) {
      const eventCard: HTMLElement = document.createElement(
        "article"
      ) as HTMLElement;

      eventCard.className = "event-card";

      main.appendChild(eventCard);
      eventCard.innerHTML = eventCard.innerHTML =
        `${key.name}: ${key.summary} ` +
        `<a href="https://www.polisen.se${key.url}" target="_blank">Läs mer</a>`;
    } else {
      console.log("ogiltig data", key);
    }
  }
}
