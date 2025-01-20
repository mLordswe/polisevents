import "./maintag.scss";

export function main(): HTMLElement {
  const body = document.querySelector("body");
  const main = body?.appendChild(document.createElement("main")) as HTMLElement;

  return main as HTMLElement;
}
