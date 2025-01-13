import { Loader } from "@googlemaps/js-api-loader";
import { apikey } from "./apikey";
const loader = new Loader({
  apiKey: `${apikey}`,
  version: "weekly",
  // ...additionalOptions ,
});

loader.load().then(async () => {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 60.7419, lng: 15.0181 },
    zoom: 4,
  });
});
// Initialize and add the map
let map;
export async function initMap(
  x: number,
  y: number,
  name: string
): Promise<void> {
  // The location of Uluru
  const position = { lat: x, lng: y };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    "marker"
  )) as google.maps.MarkerLibrary;

  // The map, centered at sweden
  map = new Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  //
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: `${name}`,
  });
}
