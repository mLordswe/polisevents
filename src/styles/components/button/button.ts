import "./button.scss";

export function srcButton(): HTMLElement {
  const newForm = document.querySelector("#newForm") as HTMLElement;
  const searchButton = newForm.appendChild(
    document.createElement("button")
  ) as HTMLElement;

  searchButton?.setAttribute("button", "submit");
  searchButton?.setAttribute("id", "formbutton");
  searchButton.innerHTML = "Sök";
  return searchButton as HTMLElement;
}
