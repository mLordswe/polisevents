import "../sass/components/history.scss";
import { getData } from "../main";
import { searchField } from "./searchfield";

const main = document.querySelector("main") as HTMLElement;

export const searchHistoryDiv = main.appendChild(
  document.createElement("div")
) as HTMLElement;
searchHistoryDiv.setAttribute("id", "searchHistoryDiv");
const listOfSearches: Array<{ term: string; count: Number }> = [];
searchHistoryDiv.style.opacity = "0";

export function searchHistory(x: string, resultCount: Number) {
  const isDuplicate = listOfSearches.some((item) => item.term === x);

  if (!isDuplicate) {
    listOfSearches.push({ term: x, count: resultCount });
  }

  // Rensa och rendera listan
  searchHistoryDiv.innerHTML = "";
  listOfSearches.forEach((search) => {
    const history = `<li>${search.term} (${search.count} resultat)</li>`; // Visa antal
    const elementUL = document.createElement("ul");
    elementUL.className = "searchHistoryListItem";
    searchHistoryDiv.appendChild(elementUL);
    elementUL.innerHTML = history;
    searchHistoryDiv.appendChild(elementUL) as HTMLElement;
    elementUL.innerHTML = `${history} `; // ändra history.length till rätt
    console.log(getData.length);
    setSearchFromHistory(); // function to set search from history

    const removeButton = elementUL.appendChild(
      document.createElement("button")
    );

    removeButton.className = "removeButton";
    // removeButton.textContent = "Ta bort";
    removeButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const searchField = document.querySelector(
        "#searchField"
      ) as HTMLInputElement;
      searchField.value = "";
      if (searchField) {
        console.log("searchField", searchField);
      }
      listOfSearches.pop();
      console.log(listOfSearches);
      const button = e.target as HTMLElement;
      const parentLI = button.parentElement as HTMLLinkElement;
      parentLI.remove();
    });
  });
}

export const setSearchFromHistory = () => {
  const searchItems = document.querySelectorAll(".searchHistoryListItem");
  const form = document.querySelector("form");
  searchItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("hej");

      const searchField = document.querySelector(
        "#searchField"
      ) as HTMLInputElement;
      searchField.innerText = "";

      if (!searchField) {
        console.error("Searchfield not found");
        return;
      }
      if (item === undefined) {
        console.error("Item not found");
        return;
      }
      searchField.value = item.textContent?.split(" ")[0] || "";
      // const form = document.querySelector("form");
      form?.dispatchEvent(new Event("submit"));
    });
  });
};
