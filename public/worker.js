if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("SW Registered", reg))
    .catch((error) => console.error("SW not Red due to: ", error));
} else {
  console.warn("SW not supported");
}
