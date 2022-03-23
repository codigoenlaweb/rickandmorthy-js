import router from "@routes";
import "@styles";
import ico from "@image/ico.jpg";
import opacity from "@utils/opacity.js";
import changeRoute from "@utils/changeRoute.js";
import loadCharacter from "@utils/loadCharacter.js";
import loadHeader from "@utils/loadHeader";
import loadLinks from "@utils/loadLinks"

// Inicializacion
const body = document.querySelector("#body");
const load = new loadCharacter();

document.querySelector("link").href = ico;

window.addEventListener("load", async () => {
  loadHeader();
  let route = await router();
  await load.observer();

  loadLinks(route)
});

window.addEventListener("hashchange", () => {
  opacity();
  setTimeout(async () => {
    await changeRoute();
    const route = await router();
    loadLinks(route)
    opacity();
  }, 200);
  load.rewind();
});

body.addEventListener("click", (e) => {
  load.clickFilter(e)
});

