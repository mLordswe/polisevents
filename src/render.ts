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

newForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue: any = searchField.value;
  getData(searchValue);
  makeCards(searchValue);
});

function makeCards(arrayToRender: ApiResponse[]) {
  for (const key of arrayToRender) {
    // create article containing monster card

    const monsterCard: HTMLElement = document.createElement(
      "article"
    ) as HTMLElement;
    monsterCard.className = "monster-card";
    main.appendChild(monsterCard);
    monsterCard.innerHTML = `${key.name}
                             ${key.datetime}
                             ${key.summary}   `;
  }
}
