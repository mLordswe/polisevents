import "../sass/components/spinner.scss";
import { ifElementExistsAppend, cardDiv } from "./constants";
export const createLoader = () => {
  const createDiv = document.createElement("div") as HTMLDivElement;
  ifElementExistsAppend(cardDiv, createDiv);

  createDiv.setAttribute("id", "spinner-div");
  return createDiv; // Det är redan en HTMLDivElement, så ingen typomvandling behövs
};

let currentLoader: HTMLElement | null; // Håller koll på den aktiva loadern

export const useLoader = () => {
  if (currentLoader) {
    currentLoader.remove(); // Ta bort tidigare loader om den finns
  }

  currentLoader = createLoader(); // Skapa en ny loader

  return currentLoader;
};
