import { getData } from "./main";
import { ApiResponse } from "./types";
const body = document.querySelector("body");
let main: HTMLElement = body?.appendChild(
  document.createElement("main")
) as HTMLElement;
main.setAttribute("id", "main");
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

newForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchValue: any = searchField.value;
  const data = await getData(searchValue);
  makeCards(data);
});

function makeCards(arrayToRender: ApiResponse[]) {
  for (const key of arrayToRender) {
    // create article containing event card
    if (key.name && key.summary) {
      const eventCard: HTMLElement = document.createElement(
        "article"
      ) as HTMLElement;

      eventCard.className = "event-card";
      main.appendChild(eventCard);
      eventCard.innerHTML = `${key.name}:  ${key.summary}`;
    } else {
      console.log("ogiltig data", key);
    }
  }
}
