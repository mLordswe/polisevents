import { ApiResponse } from "./types";
import { renderPage } from "./render";
export async function getData(userInput: string): Promise<ApiResponse[]> {
  const response = await fetch(
    `https://polisen.se/api/events?locationname=${userInput}`
  );
  if (!response.ok) {
    throw new Error("Detta fungerar inte");
  }
  const data: ApiResponse[] = await response.json();
  console.log(data);
  return data;
}

renderPage();
