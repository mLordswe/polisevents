import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyBBFXoIZ8Jcxt4b3c8C0OfiYeoFEgPdps0",
  version: "weekly",
  // ...additionalOptions ,
});

loader.load().then(async () => {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
// Initialize and add the map
let map;
export async function initMap(x: number, y: number): Promise<void> {
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

  // The map, centered at Uluru
  map = new Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}
