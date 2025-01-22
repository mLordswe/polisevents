const body = document.querySelector("body");

const searchHistoryDiv = body?.appendChild(
  document.createElement("div")
) as HTMLElement;
searchHistoryDiv.setAttribute("id", "searchHistoryDiv");
const listOfSearches: string[] = [];

export function searchHistory(x: string) {
  listOfSearches.push(`<li>${x}</li>`);
  console.log(listOfSearches);
  // const elementLI = document.createElement("li") as HTMLLIElement;
  searchHistoryDiv.innerHTML = "";
  for (let i = 0; i < listOfSearches.length; i++) {
    const history = listOfSearches[i];
    const elementUL = document.createElement("ul");
    elementUL.className = `searchHistoryListItem`; //tog bort ${[i]}
    searchHistoryDiv.appendChild(elementUL) as HTMLElement;
    elementUL.innerHTML = history;
    const removeButton = elementUL.appendChild(
      document.createElement("button")
    );
    removeButton.className = "removeButton";

    removeButton.addEventListener("click", (e) => {
      const button = e.target as HTMLElement;
      const parentLI = button.parentElement as HTMLLinkElement;
      listOfSearches.splice(i, 1);
      parentLI.remove();
    });
  }
}
