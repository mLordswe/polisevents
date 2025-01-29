import { searchField } from "./searchfield";

export const options = {
  //dynamiskt ifall polisen skulle ändra sina endpoints
  platser: "locationname=",
  händelser: "type=",
  datum: "DateTime=",
};

export const selectButtons = () => {
  const formDiv = document.querySelector(".formDiv") as HTMLDivElement;

  const selectDiv = document.createElement("div") as HTMLDivElement;
  selectDiv.className = "selectDiv";
  formDiv.appendChild(selectDiv);
  const selectField = document.createElement("select") as HTMLSelectElement;
  selectField.className = "selectField";

  selectDiv.appendChild(selectField);
  for (const key in options) {
    const option = document.createElement("option") as HTMLOptionElement;
    option.value = options[key as keyof typeof options];
    option.text = key;
    selectField.appendChild(option);
  }
  selectField.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log("Selected value:", selectedValue);
    changeSearchType(selectedValue);
  });
  return selectDiv;
};
export const getSelectedValue = () => {
  const selectField = document.querySelector(
    ".selectField"
  ) as HTMLSelectElement;
  return selectField ? selectField.value : "";
};
//kollar vad för typ av sökning som görs och ändrar sökfältet eftersom
const changeSearchType = (x: string) => {
  const searchField = document.querySelector(
    "#searchField"
  ) as HTMLInputElement;
  if (x === options.datum) {
    let date = new Date().toISOString().split("T")[0];
    searchField.setAttribute("type", "date");
    searchField.setAttribute("max", date);
  } else {
    searchField.setAttribute("type", "text");
  }
};
