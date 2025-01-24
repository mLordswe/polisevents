import "../sass/components/searchfield.scss";
export function searchField(): HTMLElement {
  const formDiv = document.querySelector(".formDiv") as HTMLDivElement;
  const searchField: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;
  searchField?.setAttribute("text", "input");
  searchField.setAttribute("id", "searchField");
  formDiv.appendChild(searchField);

  return formDiv;
}
