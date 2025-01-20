import { getData, getMapLocation } from "../../../main";
import "./form.scss";
import { makeCards } from "../cards/cards";
// import { searchField } from "../searchfield/searchfield";

export const newForm = (): HTMLFormElement => {
  const main = document.querySelector("header") as HTMLElement;
  const formDiv = main.appendChild(document.createElement("div"));
  formDiv.className = "formDiv";

  const newForm = formDiv.appendChild(
    document.createElement("form")
  ) as HTMLFormElement;
  newForm?.setAttribute("id", "newForm");

  newForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const searchfield = document.getElementById(
        "searchField"
      ) as HTMLInputElement;
      const searchValue = searchfield.value;
      const data = await getData(searchValue);
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
