import "../sass/components/searchfield.scss";
import { getSelectedValue, options, selectButtons } from "./selectfield";
const selectedValue = getSelectedValue();
export function searchField(): HTMLInputElement {
  const formDiv = document.querySelector(".formDiv") as HTMLDivElement;
  const searchField: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  searchField?.setAttribute("type", "text");

  searchField.setAttribute("id", "searchField");
  formDiv.appendChild(searchField);

  return searchField as HTMLInputElement;
}
