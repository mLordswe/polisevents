import { getData, getMapLocation } from "../../../main";
import "./form.scss";
import { makeCards } from "../cards/cards";
import { searchHistory } from "./history";
// import { searchField } from "../searchfield/searchfield";

export const newForm = (): HTMLFormElement => {
  const header = document.querySelector("header") as HTMLElement;
  const formDiv = header.appendChild(document.createElement("div"));
  formDiv.className = "formDiv";

  const newForm = formDiv.appendChild(
    document.createElement("form")
  ) as HTMLFormElement;
  newForm?.setAttribute("id", "newForm");
  newForm.setAttribute("autocomplete", "off");
  newForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const searchfield = document.getElementById(
        "searchField"
      ) as HTMLInputElement;
      const searchValue = searchfield.value;
      const data = await getData(searchValue);
      searchHistory(searchValue);
      makeCards(data);

      console.log(data);

      getMapLocation(data[0]);
    } catch (error) {
      const searchfield = document.getElementById(
        "searchField"
      ) as HTMLInputElement;
      const searchValue = searchfield.value;

      const errDiv = document.querySelector(".card-div") as HTMLElement;
      errDiv.innerHTML = `Din sökning ${searchValue} fungerade inte, Prova att söka på en Svensk Stad`;
      errDiv.style.color = "Red";
    }
  });

  return newForm as HTMLFormElement;
};
