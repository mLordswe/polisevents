import { getData } from "../main";
import "../sass/components/form.scss";
import { makeCards } from "./cards";
import { searchHistory } from "./history";
import { getSelectedValue } from "./select-filter";
export const newForm = (): HTMLFormElement => {
  // const header = document.querySelector("header") as HTMLElement;
  // const formDiv = document.createElement("div");
  // formDiv.className = "formDiv";
  // header.appendChild(formDiv);
  const formDiv = document.querySelector(".formDiv");
  const newForm = document.createElement("form") as HTMLFormElement;
  newForm?.setAttribute("id", "newForm");
  newForm.setAttribute("autocomplete", "off");
  formDiv?.appendChild(newForm);

  const searchButton = document.createElement("button") as HTMLElement;
  searchButton?.setAttribute("button", "submit");
  searchButton?.setAttribute("id", "formbutton");
  searchButton.innerHTML = "🔎";
  newForm.appendChild(searchButton);

  newForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchfield = document.getElementById(
      "searchField"
    ) as HTMLInputElement;
    const searchValue = searchfield.value; // Detta är användarens input
    const selectedValue = getSelectedValue(); // Detta är den valda kategorin

    try {
      const data = await getData(
        `${selectedValue.trimEnd()}${searchValue.trimStart()}`
      );

      searchHistory(searchValue);
      document.querySelector("main")?.appendChild(makeCards(data));
    } catch (error) {
      const searchfield = document.getElementById(
        "searchField"
      ) as HTMLInputElement;
      const searchValue = searchfield.value;
      const errDiv = document.createElement("div");
      errDiv.innerHTML = `Din sökning ${searchValue} fungerade inte, Prova att söka på en Svensk Stad`;
      errDiv.style.color = "Red";
    }
  });
  return newForm;
};
