export const formDiv = document.querySelector(".formDiv") as HTMLElement;
export const selectDiv = document.createElement("div") as HTMLDivElement;
export const selectField = document.createElement(
  "select"
) as HTMLSelectElement;
export const cardDiv = document.querySelector(".card-div") as HTMLDivElement;
export const existingLoader = document.querySelector(".loader");

// helper function, checks if elements exists and appends child
export const ifElementExistsAppend = (
  parent: HTMLElement,
  child: HTMLElement
) => {
  if (parent) {
    return parent.append(child);
  }
};
