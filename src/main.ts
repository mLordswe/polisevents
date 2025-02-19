import { ApiResponse } from "./types";
import { renderPage } from "./render";
import "./_main.scss";
export async function getData(userInput: string): Promise<ApiResponse[]> {
  const URL = `https://polisen.se/api/events?${userInput}`;
  console.log(URL);
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Detta fungerar inte");
  }
  const data: ApiResponse[] = await response.json();

  return data;
}

renderPage();
