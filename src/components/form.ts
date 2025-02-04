import { getData } from "../main";
import "../sass/components/form.scss";
import { makeCards } from "./cards";
import { searchHistory, searchHistoryDiv } from "./history";
import { useLoader } from "./loading-spinner";
import { formDiv, ifElementExistsAppend } from "./constants";
import { getSelectedValue } from "./selectfield";

export const newForm = (): HTMLFormElement => {
  const newForm = document.createElement("form") as HTMLFormElement;
  const h2 = document.querySelector("main > h2") as HTMLElement;

  newForm?.setAttribute("id", "newForm");
  newForm.setAttribute("autocomplete", "off");
  ifElementExistsAppend(formDiv, newForm);

  const searchButton = document.createElement("button") as HTMLElement;
  searchButton?.setAttribute("button", "submit");
  searchButton?.setAttribute("id", "formbutton");
  searchButton.innerHTML = "🔎";

  ifElementExistsAppend(newForm, searchButton);

  newForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    h2.remove();

    const searchfield = document.getElementById(
      "searchField"
    ) as HTMLInputElement;
    const searchValue = searchfield.value; // Detta är användarens input
    const selectedValue = getSelectedValue(); // Detta är den valda kategorin

    // Skapa en ny loader
    // const loader = useLoader() as HTMLDivElement;
    try {
      useLoader(); // Använder den uppdaterade `useLoader()` som rensar gamla loaders
      const data = await getData(
        `${selectedValue.trimEnd()}${searchValue.trimStart()}`
      );

      searchHistory(searchValue, data.length);
      document.querySelector("main")?.appendChild(makeCards(data));
      searchHistoryDiv.style.opacity = "";
    } catch (error) {
      const errDiv = document.createElement("div") as HTMLElement;
      document.querySelector("main")?.appendChild(errDiv);
      errDiv.innerHTML = `Din sökning ${searchValue} fungerade inte, Prova att söka på en Svensk Stad`;
      errDiv.style.color = "Red";
    }

    const searchField = document.querySelector(
      "#searchField"
    ) as HTMLInputElement;
    searchField.value = "";
  });
  return newForm;
};
