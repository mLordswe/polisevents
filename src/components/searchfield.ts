import "../sass/components/searchfield.scss";
import { ifElementExistsAppend, formDiv } from "./constants";
export function searchField(): HTMLInputElement {
  const searchField: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  searchField?.setAttribute("type", "text");

  searchField.setAttribute("id", "searchField");

  ifElementExistsAppend(formDiv, searchField);
  return searchField as HTMLInputElement;
}
