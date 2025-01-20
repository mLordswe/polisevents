import "./searchfield.scss";
export function searchField(): HTMLElement | string {
  const newForm = document.querySelector("#newForm") as HTMLElement;
  const searchField: HTMLInputElement = newForm.appendChild(
    document.createElement("input")
  ) as HTMLInputElement;
  searchField?.setAttribute("text", "input");
  searchField.setAttribute("id", "searchField");

  return searchField;
}
