import { getData } from "../../main";
import "./form.scss";
import { makeCards } from "../cards/cards";
import { searchHistory } from "./history";
import { getSelectedValue } from "../select-filter/select-filter";
export const newForm = (): HTMLFormElement => {
  const header = document.querySelector("header") as HTMLElement;
  const formDiv = header.appendChild(document.createElement("div"));
  formDiv.className = "formDiv";

  const newForm = formDiv.appendChild(
    document.createElement("form")
  ) as HTMLFormElement;
  newForm?.setAttribute("id", "newForm");
  newForm.setAttribute("autocomplete", "off");

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
    const selectedValue = getSelectedValue(); // Detta är den valda kategorin eller platsen

    try {
      const data = await getData(
        `${selectedValue.trimEnd()}${searchValue.trimStart()}`
      );
      console.log(`${selectedValue.trimEnd()}${searchValue.trimStart()}`);
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
