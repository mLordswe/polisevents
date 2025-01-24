import "./cards.scss";
import { ApiResponse } from "../types";
export function makeCards(arrayToRender: ApiResponse[]) {
  let cardContainer = document.querySelector(".card-div") as HTMLDivElement;
  if (cardContainer) {
    cardContainer.innerHTML = "";
  } else {
    cardContainer = document.createElement("div") as HTMLDivElement;
    cardContainer.className = "card-div";
  }
  cardContainer.className = "card-div";

  arrayToRender.forEach((key) => {
    const eventCard: HTMLElement = document.createElement(
      "article"
    ) as HTMLElement;
    eventCard.className = "event-card";
    cardContainer.appendChild(eventCard) as HTMLElement;
    if (key.name && key.summary && key.url) {
      cardContainer.appendChild(eventCard) as HTMLElement;

      const cardTitle = document.createElement("h3");
      cardTitle.textContent = key.name;
      eventCard.appendChild(cardTitle);
      const cardSummary = document.createElement("p");
      cardSummary.textContent = key.summary;
      eventCard.appendChild(cardSummary);
      const cardDate = document.createElement("p");
      cardDate.textContent = key.datetime;
      eventCard.appendChild(cardDate);
      const cardURL = document.createElement("a");
      cardURL.href = `https://www.polisen.se${key.url}`;
      cardURL.textContent = "Läs mer";
      cardURL.target = "_blank";
      eventCard.appendChild(cardURL);
      console.log(key.url);
    } else {
      console.log("Ogiltig data:", key);
    }
  });
  return cardContainer;
}
