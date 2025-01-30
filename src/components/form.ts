import { getData } from "../main";
import "../sass/components/form.scss";
import { makeCards } from "./cards";
import { searchHistory, searchHistoryDiv } from "./history";

import { getSelectedValue } from "./selectfield";
export const newForm = (): HTMLFormElement => {
  // const header = document.querySelector("header") as HTMLElement;
  // const formDiv = document.createElement("div");
  // formDiv.className = "formDiv";
  // header.appendChild(formDiv);
  const formDiv = document.querySelector(".formDiv");
  const newForm = document.createElement("form") as HTMLFormElement;
  const h2 = document.querySelector("main > h2") as HTMLElement;

  newForm?.setAttribute("id", "newForm");
  newForm.setAttribute("autocomplete", "off");
  formDiv?.appendChild(newForm);

  const searchButton = document.createElement("button") as HTMLElement;
  searchButton?.setAttribute("button", "submit");
  searchButton?.setAttribute("id", "formbutton");
  searchButton.innerHTML = "🔎";

  newForm.appendChild(searchButton);

  newForm?.addEventListener("submit", async (e) => {
    h2.remove();
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
