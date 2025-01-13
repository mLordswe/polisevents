import { Loader } from "@googlemaps/js-api-loader";
import { apikey } from "./apikey";

// Googles API med deras kod
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
    disableDefaultUI: true, // Döljer standardkontroller
    gestureHandling: "none", // Förhindrar interaktion
    draggable: false, // Förhindrar att man kan dra runt kartan
    zoomControl: true, // Förhindrar zoom
    scrollwheel: true, // Förhindrar zoom med scroll
    streetViewControl: false, // Förhindrar Street View
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
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
    disableDefaultUI: true, // Döljer standardkontroller
    gestureHandling: "none", // Förhindrar interaktion
    draggable: false, // Förhindrar att man kan dra runt kartan
    zoomControl: true, // Förhindrar zoom
    scrollwheel: true, // Förhindrar zoom med scroll
    streetViewControl: false, // Förhindrar Street View
  });

  //
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: `${name}`,
  });
}

// export const mapdata = ((g) => {
//   var h,
//     a,
//     k,
//     p = "The Google Maps JavaScript API",
//     c = "google",
//     l = "importLibrary",
//     q = "__ib__",
//     m = document,
//     b = window;
//   b = b[c] || (b[c] = {});
//   var d = b.maps || (b.maps = {}),
//     r = new Set(),
//     e = new URLSearchParams(),
//     u = () =>
//       h ||
//       (h = new Promise(async (f, n) => {
//         await (a = m.createElement("script"));
//         e.set("libraries", [...r] + "");
//         for (k in g)
//           e.set(
//             k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
//             g[k]
//           );
//         e.set("callback", c + ".maps." + q);
//         a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
//         d[q] = f;
//         a.onerror = () => (h = n(Error(p + " could not load.")));
//         a.nonce = m.querySelector("script[nonce]")?.nonce || "";
//         m.head.append(a);
//       }));
//   d[l]
//     ? console.warn(p + " only loads once. Ignoring:", g)
//     : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
// })({
//   key: `${apikey}`,
//   v: "weekly",
//   // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
//   // Add other bootstrap parameters as needed, using camel case.
// });
