import "./searchfield.scss";
export function searchField(): HTMLElement {
  const searchField: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;
  searchField?.setAttribute("text", "input");
  searchField.setAttribute("id", "searchField");

  return searchField;
}
