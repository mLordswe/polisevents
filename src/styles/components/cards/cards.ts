import "./cards.scss";
import { ApiResponse } from "../../../types";
const cardContainer = document.createElement("div");
export function makeCards(arrayToRender: ApiResponse[]): void {
  const main = document.querySelector("main");
  if (!main) {
    console.error("Main element not found.");
    return;
  }

  cardContainer.className = "card-div";
  main.appendChild(cardContainer);
  cardContainer.innerHTML = "";
  arrayToRender.forEach((key) => {
    const eventCard: HTMLElement = document.createElement("article");
    eventCard.className = "event-card";
    if (key.name && key.summary && key.url) {
      cardContainer.appendChild(eventCard);

      eventCard.innerHTML = `
          <h3>${key.name}</h3>
          <p>${key.summary}</p>
          <a href="https://www.polisen.se${key.url}" target="_blank">Läs mer</a>
        `;
    } else {
      console.log("Ogiltig data:", key);
    }
  });
}
