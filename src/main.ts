import { ApiResponse } from "./types";
import { initMap } from "./map";
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

export const getMapLocation = (location: ApiResponse[]) => {
  const coords: number = location[0].location.gps;
  const name: string = location[0].name;
  const [lat, lon] = String(coords).split(",");
  try {
    return initMap(parseFloat(lat), parseFloat(lon), name);
  } catch (error) {
    console.log("Error: you tried to get the coords but you suck");
  }
};
