import { getData } from "./main";
import { ApiResponse } from "./types";
import { initMap } from "./map";
import { getMapLocation } from "./main";
//=============TO DO =============================
// Fixa error hantering för felaktig input eller inputvärde som inte existerar i apin
//Fixa fel i koden där cardsen inte uppdateras vid ny sökning ✅
//Göra så att man kan Pin'a städer/brott för att se
//eventuellt lägga in en border runt staden man sökt på
//Undersök varför vissa städer/byar inte fungerar i programmet.
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
  try {
    const searchValue: string = searchField.value;
    const data = await getData(searchValue);
    makeCards(data);
    main.style.display = "inline-block";
    getMapLocation(data);
  } catch (error) {
    console.log("felaktig input");
    main.style.display = "none";
  }
});
//==================Functions========================
function makeCards(arrayToRender: ApiResponse[]) {
  main.innerHTML = "";
  for (const key of arrayToRender) {
    // create article containing event card
    if (key.name) {
      //&& key.summary
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
