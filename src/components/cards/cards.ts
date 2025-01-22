import "./cards.scss";
import { ApiResponse } from "../../types";
export function makeCards(arrayToRender: ApiResponse[]) {
  const cardContainer = document.createElement("div") as HTMLDivElement;

  cardContainer.className = "card-div";

  arrayToRender.forEach((key) => {
    const eventCard: HTMLElement = document.createElement(
      "article"
    ) as HTMLElement;
    eventCard.className = "event-card";

    if (key.name && key.summary && key.url) {
      cardContainer.appendChild(eventCard) as HTMLElement;

      eventCard.innerHTML = `
          <h3>${key.name}</h3>
          <p>${key.summary}</p>
          <a href="https://www.polisen.se${key.url}" target="_blank">Läs mer</a>
        `;
    } else {
      console.log("Ogiltig data:", key);
    }
  });
  return cardContainer;
  console.log(cardContainer);
}
