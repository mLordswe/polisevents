import "../sass/components/history.scss";
import { getData } from "../main";
import { searchField } from "./searchfield";

const main = document.querySelector("main") as HTMLElement;
const data = await getData.length;

export const searchHistoryDiv = main.appendChild(
  document.createElement("div")
) as HTMLElement;
searchHistoryDiv.setAttribute("id", "searchHistoryDiv");
const listOfSearches: string[] = [];

export function searchHistory(x: string) {
  listOfSearches.push(`<li>${x}</li>`);
  console.log(listOfSearches);

  searchHistoryDiv.innerHTML = "";
  listOfSearches.forEach((event) => {
    const history = event;

    const elementUL = document.createElement("ul");
    elementUL.className = "searchHistoryListItem";
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
      const searchField = document.querySelector(
        "#searchField"
      ) as HTMLInputElement | null;
      if (searchField) {
        searchField.value = "";
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

  searchItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      item.setAttribute("form", "newForm");
      item.setAttribute("type", "submit");

      console.log("hej");

      const searchField = document.querySelector(
        "#searchField"
      ) as HTMLInputElement | null;
      if (!searchField) {
        console.error("Searchfield not found");
        return;
      }
      if (item === undefined) {
        console.error("Item not found");
        return;
      }
      searchField.value = item.textContent?.split(" ")[0] || "";
      SubmitEvent;
    });
  });
};
