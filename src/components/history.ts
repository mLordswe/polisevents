import "../sass/components/history.scss";
const main = document.querySelector("main") as HTMLElement;

const searchHistoryDiv = main.appendChild(
  document.createElement("div")
) as HTMLElement;
searchHistoryDiv.setAttribute("id", "searchHistoryDiv");
const listOfSearches: string[] = [];

export function searchHistory(x: string) {
  listOfSearches.push(`<li>${x}</li>`);
  console.log(listOfSearches);

  searchHistoryDiv.innerHTML = "";
  for (let i = 0; i < listOfSearches.length; i++) {
    const history = listOfSearches[i];

    const elementUL = document.createElement("ul");
    elementUL.className = `searchHistoryListItem`;
    searchHistoryDiv.appendChild(elementUL) as HTMLElement;
    elementUL.innerHTML = `${history}gav  resultat`;
    const removeButton = elementUL.appendChild(
      document.createElement("button")
    );
    removeButton.className = "removeButton";

    removeButton.addEventListener("click", (e) => {
      listOfSearches.pop();
      console.log(listOfSearches);
      const button = e.target as HTMLElement;
      const parentLI = button.parentElement as HTMLLinkElement;
      parentLI.remove();
    });
  }
}
